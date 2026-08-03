/**
 * @vitest-environment jsdom
 */
import { afterEach, expect, it, vi } from "vitest";
import { createMutationObserver } from "./mutation.js";

const nextMo = () => new Promise((resolve) => setTimeout(resolve, 0));

afterEach(() => {
  document.body.replaceChildren();
});

it("calls onMutationIgnored for unexpected mutations (default)", async () => {
  const host = document.createElement("div");
  host.appendChild(document.createTextNode("hi"));
  document.body.appendChild(host);

  const onIgnored = vi.fn();
  const observer = createMutationObserver(host, onIgnored, false);

  const font = document.createElement("font");
  font.textContent = "hi";
  host.replaceChildren(font);

  await nextMo();
  expect(onIgnored).toHaveBeenCalled();
  // Default: foreign mutation sticks
  expect(host.querySelector("font")).not.toBeNull();

  observer._dispose();
});

it("reverts foreign childList mutations when enabled", async () => {
  const host = document.createElement("div");
  const text = document.createTextNode("hi");
  host.appendChild(text);
  document.body.appendChild(host);

  const onIgnored = vi.fn();
  const observer = createMutationObserver(host, onIgnored, true);

  // Simulate Chrome Translate wrapping the text node
  const font = document.createElement("font");
  font.appendChild(text);
  host.appendChild(font);

  await nextMo();
  expect(onIgnored).toHaveBeenCalled();
  expect(host.querySelector("font")).toBeNull();
  expect(host.firstChild?.nodeType).toBe(Node.TEXT_NODE);
  expect(host.textContent).toBe("hi");

  observer._dispose();
});

it("accepts mutations inside _domUpdate", async () => {
  const host = document.createElement("div");
  host.appendChild(document.createTextNode("hi"));
  document.body.appendChild(host);

  const onIgnored = vi.fn();
  const observer = createMutationObserver(host, onIgnored, true);

  observer._domUpdate(true);
  host.replaceChildren(document.createTextNode("hello"));
  observer._domUpdate(false);

  await nextMo();
  // Selection restore runs from editor.domUpdate, not from MO while updating.
  // After _domUpdate(false) flushes, no pending unexpected delivery.
  expect(host.textContent).toBe("hello");

  observer._dispose();
});

it("reverts characterData mutations when enabled", async () => {
  const host = document.createElement("div");
  const text = document.createTextNode("hi");
  host.appendChild(text);
  document.body.appendChild(host);

  const onIgnored = vi.fn();
  const observer = createMutationObserver(host, onIgnored, true);

  text.data = "bye";

  await nextMo();
  expect(onIgnored).toHaveBeenCalled();
  expect(text.data).toBe("hi");

  observer._dispose();
});
