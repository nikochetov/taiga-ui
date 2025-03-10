import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    tuiAsFocusableItemAccessor,
    TuiContextWithImplicit,
    tuiIsNativeFocusedIn,
    tuiPure,
} from '@taiga-ui/cdk';
import {TuiHintOptionsDirective} from '@taiga-ui/core/directives/hint';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_OPTIONS,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiTextfieldController,
    TuiTextfieldOptions,
} from '@taiga-ui/core/directives/textfield-controller';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {tuiGetBorder} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusContent, PolymorpheusOutletDirective} from '@tinkoff/ng-polymorpheus';
import {fromEvent, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {TuiPrimitiveTextfield} from './primitive-textfield-types';

const ICON_PADDING_L = 1.75;
const ICON_PADDING = 1.625;

@Component({
    selector: 'tui-primitive-textfield',
    templateUrl: './primitive-textfield.template.html',
    styleUrls: ['./primitive-textfield.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiPrimitiveTextfieldComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
    host: {
        '[class._autofilled]': 'autofilled',
        '[class._label-outside]': 'controller.labelOutside',
    },
})
export class TuiPrimitiveTextfieldComponent
    extends AbstractTuiInteractive
    implements TuiPrimitiveTextfield
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    editable = true;

    /** @deprecated use `tuiTextfieldFiller` from {@link TuiTextfieldControllerModule} instead */
    @Input('filler')
    textfieldFiller = '';

    /**
     * @deprecated:
     * use `tuiTextfieldOptionsProvider({iconCleaner: `tuiIconChevronUp`})`
     */
    @Input()
    iconCleaner = this.options.iconCleaner;

    @Input()
    @HostBinding('class._readonly')
    readOnly = false;

    @Input()
    invalid = false;

    @Input()
    disabled = false;

    /** @deprecated use `tuiTextfieldPrefix` from {@link TuiTextfieldControllerModule} instead */
    @Input('prefix')
    textfieldPrefix = '';

    /** @deprecated use `tuiTextfieldPostfix` from {@link TuiTextfieldControllerModule} instead */
    @Input('postfix')
    textfieldPostfix = '';

    @Input()
    value = '';

    @Output()
    readonly valueChange = new EventEmitter<string>();

    @ContentChildren(PolymorpheusOutletDirective, {descendants: true})
    readonly content?: QueryList<unknown>;

    autofilled = false;

    constructor(
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
        @Optional()
        @Inject(TuiHintOptionsDirective)
        readonly hintOptions: TuiHintOptionsDirective | null,
        @Inject(TUI_TEXTFIELD_OPTIONS)
        readonly options: TuiTextfieldOptions,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        super();
    }

    get prefix(): string {
        return this.textfieldPrefix || this.controller.prefix;
    }

    get postfix(): string {
        return this.textfieldPostfix || this.controller.postfix;
    }

    get filler(): string {
        return this.textfieldFiller || this.controller.filler;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        if (this.computedDisabled || !this.focusableElement) {
            return null;
        }

        const {nativeElement} = this.focusableElement;

        return (nativeElement.previousElementSibling ||
            nativeElement) as HTMLInputElement | null;
    }

    get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el.nativeElement);
    }

    get appearance(): string {
        return this.controller.appearance;
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    @HostBinding('class._invalid')
    get computedInvalid(): boolean {
        return !this.readOnly && !this.disabled && this.invalid;
    }

    @HostBinding('class._hidden')
    get inputHidden(): boolean {
        return !!this.content?.length;
    }

    get hasValue(): boolean {
        return !!this.value;
    }

    get hasCleaner(): boolean {
        return (
            this.controller.cleaner &&
            this.hasValue &&
            !this.computedDisabled &&
            !this.readOnly
        );
    }

    get hasTooltip(): boolean {
        return !!this.hintOptions?.content && !this.computedDisabled;
    }

    get hasCustomContent(): boolean {
        return !!this.controller.customContent;
    }

    get placeholderVisible(): boolean {
        const hasDecor =
            this.nativeFocusableElement?.placeholder ||
            this.prefix ||
            this.postfix ||
            this.filler;
        const showDecor = hasDecor && !this.readOnly && this.computedFocused;

        return !this.hasValue && !showDecor;
    }

    get hasPlaceholder(): boolean {
        return this.placeholderRaisable || this.placeholderVisible;
    }

    get placeholderRaised(): boolean {
        return (
            this.placeholderRaisable &&
            ((this.computedFocused && !this.readOnly) || this.hasValue || this.autofilled)
        );
    }

    @HostBinding('style.--border-start.rem')
    get borderStart(): number {
        return this.iconLeftContent ? this.iconPaddingLeft : 0;
    }

    @HostBinding('style.--border-end.rem')
    get borderEnd(): number {
        return tuiGetBorder(
            !!this.iconContent,
            this.hasCleaner,
            this.hasTooltip,
            this.hasCustomContent,
        );
    }

    get iconContent(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>> {
        return this.controller.icon;
    }

    get iconLeftContent(): PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeL | TuiSizeS>
    > {
        return this.controller.iconLeft;
    }

    get showHint(): boolean {
        return (
            !!this.hintOptions?.content &&
            (this.options.hintOnDisabled || !this.computedDisabled)
        );
    }

    // Safari expiration date autofill workaround
    get name(): 'ccexpiryyear' | null {
        return this.nativeFocusableElement?.autocomplete === 'cc-exp'
            ? 'ccexpiryyear'
            : null;
    }

    get computedId(): string {
        return this.nativeFocusableElement?.id || '';
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    @tuiPure
    getIndent$(element: HTMLElement): Observable<number> {
        return fromEvent(element, 'scroll').pipe(map(() => -1 * element.scrollLeft));
    }

    clear(): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = '';
        }

        this.updateValue('');
    }

    onMouseDown(event: MouseEvent): void {
        const {nativeFocusableElement} = this;

        if (!nativeFocusableElement || event.target === nativeFocusableElement) {
            return;
        }

        event.preventDefault();
        nativeFocusableElement.focus();
    }

    onModelChange(value: string): void {
        this.updateValue(value);
    }

    onAutofilled(autofilled: boolean): void {
        this.updateAutofilled(autofilled);
    }

    private get iconPaddingLeft(): number {
        return this.size === 'l' ? ICON_PADDING_L : ICON_PADDING;
    }

    private get placeholderRaisable(): boolean {
        return this.size !== 's' && !this.controller.labelOutside;
    }

    private updateAutofilled(autofilled: boolean): void {
        if (this.autofilled === autofilled) {
            return;
        }

        this.autofilled = autofilled;
    }

    private updateValue(value: string): void {
        this.value = value;
        this.valueChange.emit(value);
    }
}
