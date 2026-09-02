import { expect, it } from "vitest";
import { isCompositionInput } from "./composition.js";

it("is false for ordinary insertText", () => {
  expect(isCompositionInput({ isComposing: false, inputType: "insertText" })).toBe(
    false,
  );
});

it("is true when isComposing is set without compositionstart", () => {
  expect(isCompositionInput({ isComposing: true, inputType: "insertText" })).toBe(
    true,
  );
});

it("is true for composition inputTypes even when isComposing is false", () => {
  expect(
    isCompositionInput({
      isComposing: false,
      inputType: "insertCompositionText",
    }),
  ).toBe(true);
  expect(
    isCompositionInput({
      isComposing: false,
      inputType: "deleteCompositionText",
    }),
  ).toBe(true);
  expect(
    isCompositionInput({
      isComposing: false,
      inputType: "insertFromComposition",
    }),
  ).toBe(true);
  expect(
    isCompositionInput({
      isComposing: false,
      inputType: "deleteByComposition",
    }),
  ).toBe(true);
});
