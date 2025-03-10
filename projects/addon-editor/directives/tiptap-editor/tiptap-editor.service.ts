import './tiptap-editor.types';

import {Inject, Injectable} from '@angular/core';
import {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {EDITOR_BLANK_COLOR} from '@taiga-ui/addon-editor/constants';
import type {TuiEditableIframe} from '@taiga-ui/addon-editor/extensions/iframe-editor';
import type {TuiEditableImage} from '@taiga-ui/addon-editor/extensions/image-editor';
import type {TuiYoutubeOptions} from '@taiga-ui/addon-editor/extensions/youtube';
import {TuiEditorAttachedFile} from '@taiga-ui/addon-editor/interfaces';
import {TIPTAP_EDITOR} from '@taiga-ui/addon-editor/tokens';
import {tuiGetMarkRange, tuiParseStyle} from '@taiga-ui/addon-editor/utils';
import {tuiPx} from '@taiga-ui/cdk';
import type {Editor, Range} from '@tiptap/core';
import {MarkType} from 'prosemirror-model';
import {EditorState} from 'prosemirror-state';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

import {tuiIsEmptyParagraph} from './utils/is-empty-paragraph';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

@Injectable()
export class TuiTiptapEditorService extends AbstractTuiEditor {
    get isFocused(): boolean {
        return this.editor.isFocused;
    }

    get html(): string {
        return this.editor.getHTML();
    }

    get editable(): boolean {
        return this.editor.isEditable;
    }

    set editable(editable: boolean) {
        this.editor.setEditable(editable);
    }

    get state(): EditorState {
        return this.editor.state;
    }

    editor!: Editor;

    constructor(@Inject(TIPTAP_EDITOR) private readonly editorRef: Observable<Editor>) {
        super();

        this.editorRef.subscribe(editor => {
            this.editor = editor;

            editor.on(`transaction`, () => {
                this.stateChange$.next();
            });

            editor.on(`update`, () => {
                const content = editor.getHTML();
                const json = editor.getJSON().content;
                const value: string = tuiIsEmptyParagraph(json) ? `` : content;

                this.valueChange$.next(value);
            });
        });
    }

    getOriginTiptapEditor(): Editor {
        return this.editor;
    }

    undoDisabled(): boolean {
        return !this.editor.can().undo();
    }

    redoDisabled(): boolean {
        return !this.editor.can().redo();
    }

    getFontColor(): string {
        return this.editor.getAttributes(`textStyle`).fontColor || EDITOR_BLANK_COLOR;
    }

    getFontSize(): number {
        return parseInt(this.editor.getAttributes(`textStyle`).fontSize, 10);
    }

    setFontSize(size: number): void {
        this.editor
            .chain()
            .setMark(`textStyle`, {fontSize: tuiPx(size)})
            .run();
    }

    getBackgroundColor(): string {
        return this.editor?.getAttributes(`textStyle`).backgroundColor || `transparent`;
    }

    getCellColor(): string {
        return (
            this.editor.getAttributes(`tableCell`).background ||
            this.editor.getAttributes(`tableHeader`).background
        );
    }

    getGroupColor(): string {
        if (this.editor.isActive(`group`)) {
            const style = this.editor.getAttributes(`group`)?.style ?? ``;
            const styles = tuiParseStyle(style);

            return styles[`background-color`] ?? styles[`background`] ?? ``;
        }

        return ``;
    }

    onAlign(align: string): void {
        this.editor.chain().focus().setTextAlign(align).run();
    }

    setImage(src: string): void {
        this.editor
            .chain()
            .focus()
            .command(({commands, state}) => {
                const setImage = (commands.setEditableImage ?? commands.setImage) as
                    | ((config: TuiEditableImage) => boolean)
                    | undefined;

                if (setImage) {
                    const anchor = state.selection.anchor;

                    setImage({src});
                    commands.setTextSelection(anchor);

                    return true;
                }

                return false;
            })
            .run();
    }

    undo(): void {
        this.editor.chain().undo().run();
    }

    redo(): void {
        this.editor.chain().redo().run();
    }

    setHorizontalRule(): void {
        this.editor.chain().focus().setHorizontalRule().run();
    }

    removeFormat(): void {
        this.editor.commands.unsetAllMarks();
        this.editor.commands.clearNodes();
    }

    setFontColor(color: string): void {
        this.editor.chain().focus().setFontColor(color).run();
    }

    setBackgroundColor(color: string): void {
        this.editor.chain().focus().setBackgroundColor(color).run();
    }

    toggleUnderline(): void {
        this.editor.chain().focus().toggleUnderline().run();
    }

    toggleStrike(): void {
        this.editor.chain().focus().toggleStrike().run();
    }

    toggleOrderedList(): void {
        this.editor.chain().focus().toggleOrderedList().run();
    }

    toggleUnorderedList(): void {
        this.editor.chain().focus().toggleBulletList().run();
    }

    togglePre(): void {
        this.editor.chain().focus().toggleCodeBlock().run();
    }

    sinkListItem(): void {
        this.editor.chain().focus().sinkListItem(`listItem`).run();
    }

    liftListItem(): void {
        this.editor.chain().focus().liftListItem(`listItem`).run();
    }

    isActive(nameOrAttributes: Record<string, string> | string): boolean {
        return this.editor.isActive(nameOrAttributes);
    }

    isActive$(nameOrAttributes: Record<string, string> | string): Observable<boolean> {
        return this.stateChange$.pipe(
            startWith(null),
            map(() => this.isActive(nameOrAttributes)),
            distinctUntilChanged(),
        );
    }

    toggleBold(): void {
        this.editor.chain().focus().toggleBold().run();
    }

    toggleCode(): void {
        this.editor.chain().focus().toggleCode().run();
    }

    toggleItalic(): void {
        this.editor.chain().focus().toggleItalic().run();
    }

    toggleBlockquote(): void {
        this.editor.chain().focus().toggleBlockquote().run();
    }

    toggleSubscript(): void {
        this.editor.chain().focus().toggleSubscript().run();
    }

    toggleSuperscript(): void {
        this.editor.chain().focus().toggleSuperscript().run();
    }

    toggleCodeBlock(): void {
        this.editor.chain().focus().toggleCodeBlock().run();
    }

    insertTable(cols: number, rows: number): void {
        this.editor.chain().focus().insertTable({cols, rows}).run();
    }

    addColumnAfter(): void {
        this.editor.chain().focus().addColumnAfter().run();
    }

    addColumnBefore(): void {
        this.editor.chain().focus().addColumnBefore().run();
    }

    addRowAfter(): void {
        this.editor.chain().focus().addRowAfter().run();
    }

    addRowBefore(): void {
        this.editor.chain().focus().addRowBefore().run();
    }

    deleteColumn(): void {
        this.editor.chain().focus().deleteColumn().run();
    }

    deleteRow(): void {
        this.editor.chain().focus().deleteRow().run();
    }

    mergeCells(): void {
        this.editor.chain().focus().mergeCells().run();
    }

    splitCell(): void {
        this.editor.chain().focus().splitCell().run();
    }

    canMergeCells(): boolean {
        return this.editor.can().mergeCells();
    }

    canSplitCells(): boolean {
        return this.editor.can().splitCell();
    }

    setHeading(level: Level): void {
        this.editor.chain().focus().setHeading({level}).run();
    }

    setParagraph(options?: {fontSize: string}): void {
        this.editor.chain().focus().setParagraph().run();

        if (options) {
            this.editor.chain().setMark(`textStyle`, options).run();
        }
    }

    setHardBreak(): void {
        this.editor.chain().setHardBreak().run();
    }

    setTextSelection(value: Range | number): void {
        this.editor.commands.setTextSelection(value);
    }

    toggleLink(href: string): void {
        this.editor.chain().focus().toggleLink({href}).run();
    }

    setLink(href: string): void {
        this.editor.chain().focus().setLink({href}).run();
    }

    unsetLink(): void {
        this.editor.chain().focus().unsetLink().run();
    }

    focus(): void {
        this.editor.chain().focus().run();
    }

    setValue(value: string): void {
        if (value === this.html || (value === `` && this.html === `<p></p>`)) {
            return;
        }

        this.editor.commands.setContent(value);
        this.editor.view.updateState(
            EditorState.create({
                schema: this.editor.state.schema,
                doc: this.editor.state.doc,
                selection: this.editor.state.selection,
                storedMarks: this.editor.state.storedMarks,
                plugins: this.editor.state.plugins,
            }),
        );
    }

    destroy(): void {
        this.editor.destroy();
    }

    setCellColor(color: string): void {
        this.editor.chain().focus().setCellBackground(color).run();
    }

    selectClosest(): void {
        const pos = this.editor.state.selection.anchor;
        const {schema, doc} = this.editor.state;
        const range = tuiGetMarkRange(doc.resolve(pos), schema.marks.link);

        if (range) {
            this.editor.chain().setTextSelection(range).run();
        }
    }

    enter(): void {
        this.editor.commands.enter();
    }

    setDetails(): void {
        this.editor.commands.setDetails();
    }

    removeDetails(): void {
        this.editor.commands.removeDetails();
    }

    setGroup(): void {
        this.editor.commands.setGroup();
    }

    removeGroup(): void {
        this.editor.commands.removeGroup();
    }

    setGroupHilite(color: string): void {
        this.editor.commands.setGroupHilite(color);
    }

    setAnchor(anchor: string): void {
        this.editor.commands.setAnchor(anchor.replace(`#`, ``));
    }

    removeAnchor(): void {
        this.editor.commands.removeAnchor();
    }

    setFileLink(preview: TuiEditorAttachedFile): void {
        this.editor.commands.setFileLink(preview);
    }

    setYoutubeVideo(options: TuiYoutubeOptions): void {
        this.editor.commands.setYoutubeVideo(options as any);
    }

    setIframe(options: TuiEditableIframe): void {
        this.editor.commands.setIframe(options);
    }

    removeEmptyTextStyle(): void {
        this.editor.commands.removeEmptyTextStyle();
    }

    toggleMark(
        typeOrName: MarkType | string,
        attributes?: Record<string, any>,
        options?: {extendEmptyMarkRange?: boolean},
    ): void {
        this.editor.commands.toggleMark(typeOrName, attributes, options);
    }
}
