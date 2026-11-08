import { StandardSchemaV1 } from '@standard-schema/spec';
import { DocNode, Fragment, Selection } from './doc/types.js';
import { Operation } from './doc/operation.js';
import { Parser } from './dom/parser.js';
type EditorCommandOrPlugin<A extends unknown[], T extends DocNode = DocNode> = (editor: Editor<T>, ...args: A) => void | undefined;
type EditorQuery<A extends unknown[], V, T extends DocNode = DocNode> = (editor: Editor<T>, ...args: A) => V;
/**
 * Options of {@link createEditor}.
 */
export interface EditorOptions<T extends DocNode, S extends StandardSchemaV1<T, T> | void = void> {
    /**
     * Optional [Standard Schema](https://github.com/standard-schema/standard-schema) to validate unsafe edits.
     */
    schema?: S;
    /**
     * Initial document.
     */
    doc: T;
    /**
     * The state editable or not.
     */
    readonly?: boolean;
    /**
     * TODO
     */
    isBlock?: (node: HTMLElement) => boolean;
    /**
     * Keep the caret visible inside the mounted element after document
     * changes, behaving like a native `<textarea>`:
     *
     * - If the caret is already visible (e.g. typing in the middle of a
     *   long doc), nothing scrolls.
     * - If the caret falls below the viewport, the element scrolls down
     *   just enough to reveal it.
     * - If the caret falls above the viewport, the element scrolls up
     *   just enough to reveal it.
     *
     * Scroll work is coalesced via `requestAnimationFrame` and only reads
     * the caret's bounding rect, never `scrollHeight`, so it does not
     * force a full overflow-layout pass on each input.
     *
     * @default false
     */
    autoScroll?: boolean;
    /**
     * Revert DOM mutations that are not from IME composition and not inside
     * {@link Editor.domUpdate}.
     *
     * Use with **imperative** view sync (host patches the contenteditable from
     * `change`). Declarative React/Vue hosts that re-render from state should
     * leave this `false` — their paint looks like a foreign mutation and would
     * be undone.
     *
     * When enabled, wrap every host-driven DOM write in {@link Editor.domUpdate}
     * so the paint is accepted. This defends against page translators,
     * Grammarly-like extensions, and similar tools that rewrite the editable
     * tree and desync it from the document model.
     *
     * @default false
     */
    revertForeignMutations?: boolean;
    /**
     * Callback invoked when errors happen.
     *
     * @default console.warn
     */
    onWarn?: (message: string) => void;
    /**
     * Callback invoked when errors happen.
     *
     * @default `throw new Error(message)`
     */
    onError?: (message: string) => never;
}
export type EditorContext<_> = {};
type EditorEventMap = {
    change: () => void;
    selectionchange: () => void;
    readonly: () => void;
};
/**
 * Functions to handle keyboard events.
 *
 * Return `true` if you want to stop propagation.
 */
export type KeyboardHook = (keyboard: KeyboardEvent) => boolean | void;
/**
 * Functions to handle copy events
 */
export type CopyHook = (dataTransfer: DataTransfer) => void;
/**
 * Functions to handle paste / drop events.
 *
 * Return `true` if you want to stop propagation.
 */
export type PasteHook = (dataTransfer: DataTransfer) => string | Fragment | true | null;
type EditorHookMap = {
    /**
     * Call `next(op)` to continue applying the operation, or `next()` with a nullish value to cancel it with its transaction.
     * `next` returns the operation applied to the document after the following hooks, or null if it was cancelled or failed to apply. The transaction may still be discarded afterwards.
     *
     * If the hook returns without calling `next`, the operation is passed through as is.
     */
    apply: (op: Operation, next: (op?: Operation | null) => Operation | null) => void;
    mount: (element: HTMLElement, parser: Parser) => void | (() => void);
    keyboard: KeyboardHook;
    copy: CopyHook;
    paste: PasteHook;
};
/**
 * The editor instance.
 */
export interface Editor<T extends DocNode = DocNode> {
    readonly doc: T;
    /**
     * Whether the document is empty (no text content, no void nodes).
     * Recomputed once per commit so reads stay O(1).
     */
    readonly isEmpty: boolean;
    selection: Selection;
    /**
     * The getter/setter for the editor's read-only state.
     * `true` to read-only. `false` to editable.
     */
    readonly: boolean;
    /**
     * Enable/disable native-textarea-like auto-scroll: scroll the mounted
     * element only when needed to keep the caret visible.
     *
     * @see {@link EditorOptions.autoScroll}
     */
    autoScroll: boolean;
    /**
     * Applies editing operations as a transaction, which is discarded if one of them is cancelled or throws, or the result is rejected by the schema.
     * @param op {@link Operation}
     */
    apply(op: Operation | readonly Operation[]): this;
    /**
     * Executes a function with editor bound as context.
     * @param fn {@link EditorCommandOrPlugin} or {@link EditorQuery}
     * @param args arguments of the function
     */
    exec<const A extends unknown[]>(fn: EditorCommandOrPlugin<A, T>, ...args: A): this;
    exec<const A extends unknown[], V>(fn: EditorQuery<A, V, T>, ...args: A): V;
    /**
     * A function to subscribe editor events.
     * @returns cleanup function
     */
    on<K extends keyof EditorEventMap>(key: K, callback: EditorEventMap[K]): () => void;
    /**
     * A function to register editor hooks.
     * @returns cleanup function
     */
    hook<K extends keyof EditorHookMap>(key: K, callback: EditorHookMap[K]): () => void;
    /**
     * Get a value from the context.
     */
    get<V>(key: EditorContext<V>): V;
    /**
     * Set a value for the context.
     */
    set<V>(key: EditorContext<V>, value: V): this;
    /**
     * A function to make DOM editable.
     * @returns A function to stop subscribing DOM changes and restores previous DOM state.
     */
    input: (element: HTMLElement) => () => void;
    /**
     * Run a host-driven DOM paint. Mutations inside are accepted by the
     * MutationObserver.
     *
     * Required when {@link EditorOptions.revertForeignMutations} is `true`.
     * Safe to call when unmounted (runs `fn` only) or when the option is off.
     */
    domUpdate(fn: () => void): this;
}
/**
 * A function to initialize {@link Editor}.
 */
export declare const createEditor: <T extends DocNode, S extends StandardSchemaV1<T, T> | void = void>({ doc, readonly, schema, isBlock, autoScroll: _autoScroll, revertForeignMutations, onWarn, onError, }: EditorOptions<T, S>) => Editor<T>;
export {};
