/**
 * Chrome Android (and some other mobile IMEs) often skip `compositionstart`
 * on the contenteditable host. `beforeinput` / `input` still flag the IME via
 * `isComposing` or a composition `inputType`. Treat those as an open
 * composition so we record DOM mutations instead of flushing mid-word.
 *
 * @internal
 */
export const isCompositionInput = (
  event: Pick<InputEvent, "isComposing" | "inputType">,
): boolean => {
  if (event.isComposing) return true;
  switch (event.inputType) {
    case "insertCompositionText":
    case "deleteCompositionText":
    case "insertFromComposition":
    case "deleteByComposition":
      return true;
    default:
      return false;
  }
};
