import { afterEach, describe, expect, it } from "vitest";
import { createPlainEditor } from "./presets/plain.js";
import type { Editor } from "./editor.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const LINE_TEXT = "the quick brown fox jumps over the lazy dog";

/**
 * Build a host element with N lines of text, mount the editor, set the DOM
 * selection to `caretOffset` characters into the doc, then return everything
 * needed for the assertions.
 *
 * The host is styled with `max-height: 100px; overflow-y: auto;` so a doc with
 * many lines overflows and gives autoScroll something to do.
 */
function mount(
  lines: number,
  caretAt: "start" | "middle" | "end",
  autoScroll = true,
): { editor: Editor; host: HTMLDivElement; cleanup: () => void; lineEls: HTMLDivElement[] } {
  const host = document.createElement("div");
  host.style.cssText = [
    "width: 320px",
    "max-height: 100px",
    "overflow-y: auto",
    "font: 14px/1.4 monospace",
    "padding: 4px",
    "box-sizing: content-box",
    "white-space: pre-wrap",
  ].join("; ");
  document.body.appendChild(host);

  // Pre-render the DOM children so the doc and DOM agree.
  const lineEls: HTMLDivElement[] = [];
  const text = Array.from({ length: lines }, (_, i) => `${i}: ${LINE_TEXT}`).join("\n");
  for (const line of text.split("\n")) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(line));
    host.appendChild(div);
    lineEls.push(div);
  }

  const editor = createPlainEditor({
    text,
    autoScroll,
    // We don't rebuild the DOM in onChange — the scroll logic only reads the
    // current DOM selection rect, so it doesn't care whether the post-change
    // DOM matches the doc. Keeping onChange a no-op isolates the scroll math.
    onChange: () => {},
  });
  const stop = editor.input(host);

  // Place the DOM selection at the requested location.
  const targetLineIndex =
    caretAt === "start" ? 0 : caretAt === "end" ? lines - 1 : Math.floor(lines / 2);
  const targetLine = lineEls[targetLineIndex]!;
  const textNode = targetLine.firstChild as Text;
  const range = document.createRange();
  range.setStart(textNode, textNode.data.length);
  range.collapse(true);
  const sel = window.getSelection()!;
  sel.removeAllRanges();
  sel.addRange(range);
  // Make sure host has focus so selection isn't dropped.
  host.focus({ preventScroll: true });

  return { editor, host, cleanup: () => { stop(); host.remove(); }, lineEls };
}

/** Wait one rAF tick (where `scheduleScroll` runs) plus a microtask flush. */
function nextScroll(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

/** True iff the caret rect is fully inside the host's visible viewport. */
function caretVisible(host: HTMLElement): boolean {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return false;
  const rect = sel.getRangeAt(0).getBoundingClientRect();
  const host_ = host.getBoundingClientRect();
  return rect.top >= host_.top - 0.5 && rect.bottom <= host_.bottom + 0.5;
}

/**
 * Insert a single character at the current selection by applying an edit
 * operation. This triggers the editor's "change" event which is what calls
 * `scheduleScroll`.
 */
function insertAtCaret(editor: Editor, ch = "x"): void {
  const at = editor.selection[0];
  editor.apply({ type: "insert_text", at, text: ch });
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

let mounted: ReturnType<typeof mount> | null = null;
afterEach(() => {
  mounted?.cleanup();
  mounted = null;
});

describe("autoScroll: keep caret visible (native-textarea-like)", () => {
  it("does NOT scroll when caret is already visible (typing at start of overflowing doc)", async () => {
    mounted = mount(20, "start");
    const { host, editor } = mounted;
    // Ensure the start of the doc is currently scrolled into view.
    host.scrollTop = 0;
    expect(caretVisible(host)).toBe(true);
    const before = host.scrollTop;

    insertAtCaret(editor);
    await nextScroll();

    expect(host.scrollTop).toBe(before);
    expect(caretVisible(host)).toBe(true);
  });

  it("does NOT scroll when caret is in the middle of the visible viewport", async () => {
    mounted = mount(20, "middle");
    const { host, editor, lineEls } = mounted;
    // Manually scroll so the caret's line is in the middle of the viewport.
    const targetLine = lineEls[Math.floor(lineEls.length / 2)]!;
    const lineTop = targetLine.offsetTop;
    host.scrollTop = Math.max(0, lineTop - host.clientHeight / 2);
    expect(caretVisible(host)).toBe(true);
    const before = host.scrollTop;

    insertAtCaret(editor);
    await nextScroll();

    expect(host.scrollTop).toBe(before);
    expect(caretVisible(host)).toBe(true);
  });

  it("scrolls DOWN just enough to reveal the caret when typing past the bottom edge", async () => {
    mounted = mount(20, "end");
    const { host, editor } = mounted;
    // Start scrolled near the top so the caret (which is on the last line) is
    // below the visible area.
    host.scrollTop = 0;
    expect(caretVisible(host)).toBe(false);
    const maxScroll = host.scrollHeight - host.clientHeight;

    insertAtCaret(editor);
    await nextScroll();

    expect(caretVisible(host)).toBe(true);
    // Native textarea behaviour: scroll just enough — not past the bottom.
    expect(host.scrollTop).toBeLessThanOrEqual(maxScroll + 0.5);
    expect(host.scrollTop).toBeGreaterThan(0);
  });

  it("scrolls UP to reveal the caret when the caret is above the visible area", async () => {
    mounted = mount(20, "start");
    const { host, editor } = mounted;
    // Push viewport all the way to the bottom — caret on line 0 is now hidden.
    host.scrollTop = host.scrollHeight;
    expect(caretVisible(host)).toBe(false);
    const before = host.scrollTop;

    insertAtCaret(editor);
    await nextScroll();

    expect(caretVisible(host)).toBe(true);
    expect(host.scrollTop).toBeLessThan(before);
  });

  it("never scrolls past the bottom of the content", async () => {
    mounted = mount(30, "end");
    const { host, editor } = mounted;
    const maxScroll = host.scrollHeight - host.clientHeight;

    for (let i = 0; i < 5; i++) {
      insertAtCaret(editor);
      await nextScroll();
    }

    expect(host.scrollTop).toBeLessThanOrEqual(maxScroll + 0.5);
    expect(host.scrollTop).toBeGreaterThanOrEqual(0);
  });

  it("does not scroll a non-overflowing element", async () => {
    mounted = mount(2, "end");
    const { host, editor } = mounted;
    expect(host.scrollHeight).toBeLessThanOrEqual(host.clientHeight + 0.5);

    insertAtCaret(editor);
    await nextScroll();

    expect(host.scrollTop).toBe(0);
  });

  it("does nothing when autoScroll is disabled", async () => {
    mounted = mount(20, "end", false);
    const { host, editor } = mounted;
    host.scrollTop = 0;
    const before = host.scrollTop;

    insertAtCaret(editor);
    await nextScroll();

    expect(host.scrollTop).toBe(before);
  });

  it("coalesces multiple changes within a frame into one scroll adjustment", async () => {
    mounted = mount(30, "end");
    const { host, editor } = mounted;
    host.scrollTop = 0;

    // Several edits within the same task — only one rAF callback should fire.
    let rafCalls = 0;
    const origRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = (cb: FrameRequestCallback) => {
      rafCalls++;
      return origRAF(cb);
    };
    try {
      for (let i = 0; i < 5; i++) insertAtCaret(editor);
      await nextScroll();
    } finally {
      window.requestAnimationFrame = origRAF;
    }

    // Coalescing: we schedule at most one rAF for the burst (others may be
    // from the test's own nextScroll helper).
    expect(rafCalls).toBeLessThanOrEqual(3);
    expect(caretVisible(host)).toBe(true);
  });
});

describe("autoScroll: dynamic setter", () => {
  it("disabling autoScroll at runtime stops further scroll adjustments", async () => {
    mounted = mount(20, "end");
    const { host, editor } = mounted;
    host.scrollTop = 0;

    insertAtCaret(editor);
    await nextScroll();
    const afterEnabled = host.scrollTop;
    expect(afterEnabled).toBeGreaterThan(0);

    editor.autoScroll = false;
    host.scrollTop = 0;

    insertAtCaret(editor);
    await nextScroll();
    expect(host.scrollTop).toBe(0);
  });

  it("enabling autoScroll at runtime starts adjusting on next change", async () => {
    mounted = mount(20, "end", false);
    const { host, editor } = mounted;
    host.scrollTop = 0;

    insertAtCaret(editor);
    await nextScroll();
    expect(host.scrollTop).toBe(0);

    editor.autoScroll = true;
    insertAtCaret(editor);
    await nextScroll();
    expect(host.scrollTop).toBeGreaterThan(0);
    expect(caretVisible(host)).toBe(true);
  });
});
