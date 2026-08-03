/**
 * @internal
 */
export const createMutationObserver = (
  element: Element,
  onMutationIgnored: () => void,
  /**
   * When true, DOM mutations outside composition recording and outside
   * `_domUpdate(true)` are reverted. Imperative hosts must wrap their paint
   * in `_domUpdate`; declarative React hosts should leave this false.
   */
  revertForeign = false,
) => {
  let isInputing = false;
  let isDomUpdating = false;
  let queue: MutationRecord[] = [];

  const process = (records: MutationRecord[]) => {
    if (isInputing || isDomUpdating) {
      queue.push(...records);
    }
  };

  const revertRecords = (records: MutationRecord[]) => {
    let m: MutationRecord | undefined;
    while ((m = records.pop())) {
      if (m.type === "childList") {
        const { target, removedNodes, addedNodes, nextSibling } = m;
        for (let i = removedNodes.length - 1; i >= 0; i--) {
          target.insertBefore(removedNodes[i]!, nextSibling);
        }
        for (let i = addedNodes.length - 1; i >= 0; i--) {
          target.removeChild(addedNodes[i]!);
        }
      } else {
        // characterData
        (m.target as CharacterData).data = m.oldValue!;
      }
    }
  };

  // https://dom.spec.whatwg.org/#interface-mutationobserver
  const mo = new MutationObserver((records) => {
    if (isInputing || isDomUpdating) {
      process(records);
      return;
    }

    if (revertForeign && records.length) {
      // Undo Translate / extension / spellcheck wrappers that rewrite the
      // contenteditable tree. takeRecords() inside flush() swallows the
      // side-effect mutations from the undo so they are not delivered again.
      revertRecords(records.slice());
      flush();
    }

    onMutationIgnored();
  });

  const sync = () => {
    process(mo.takeRecords());
  };

  const flush = (): MutationRecord[] => {
    sync();
    const prev = queue;
    queue = [];
    return prev;
  };

  mo.observe(element, {
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
  });

  return {
    _revert: (records: MutationRecord[]) => {
      revertRecords(records);
      flush();
    },
    _record: (enable: boolean) => {
      if (!isInputing && enable) {
        sync();
      }
      isInputing = enable;
    },
    /**
     * Mark a host-driven DOM paint. Mutations inside are accepted (queued and
     * discarded on disable). Required when `revertForeign` is true.
     */
    _domUpdate: (enable: boolean) => {
      if (!isDomUpdating && enable) {
        // Drop any pending unexpected records before accepting host paint.
        mo.takeRecords();
      }
      if (isDomUpdating && !enable) {
        flush();
      }
      isDomUpdating = enable;
    },
    _flush: flush,
    _dispose: () => {
      queue.length = 0;
      mo.disconnect();
    },
  };
};
