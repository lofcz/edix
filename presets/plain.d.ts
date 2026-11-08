import { Editor, EditorOptions } from '../editor.js';
type PlainDoc = {
    children: {
        children: {
            text: string;
        }[];
    }[];
};
/**
 * Describes which lines changed between two document snapshots.
 * Starting at line `start`, `oldCount` lines were replaced with `newCount` lines.
 * `lines` contains the text content of the new lines in the dirty window.
 */
export interface DirtyRange {
    start: number;
    oldCount: number;
    newCount: number;
    lines: string[];
}
export interface PlainEditorOptions extends Omit<EditorOptions<PlainDoc>, "doc" | "schema" | "onChange"> {
    /**
     * Initial document text.
     */
    text: string;
    /**
     * TODO
     */
    singleline?: boolean;
    /**
     * Callback invoked when document changes.
     */
    onChange: (text: string, dirtyRange: DirtyRange) => void;
}
/**
 * A function to initialize editor with plaintext.
 */
export declare const createPlainEditor: ({ text, singleline, onChange, ...opts }: PlainEditorOptions) => Editor<PlainDoc>;
export {};
