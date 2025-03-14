import {Directive, EventEmitter, HostBinding, Input, Output} from '@angular/core';

const TUI = `tui_interactive_`;

/**
 * The most basic class for interactive components
 */
@Directive()
export abstract class AbstractTuiInteractive {
    private static autoId = 0;

    abstract disabled: boolean;

    abstract focused: boolean;

    private readonly autoIdString: string;

    @Input()
    pseudoHover: boolean | null = null;

    @Input()
    pseudoActive: boolean | null = null;

    @Input()
    pseudoFocus: boolean | null = null;

    /**
     * Determines if component is focusable with keyboard.
     */
    @Input()
    focusable = true;

    @Input()
    nativeId = ``;

    /**
     * Emits 'true' on focus and 'false' on blur.
     */
    @Output()
    readonly focusedChange = new EventEmitter<boolean>();

    @Output()
    readonly focusVisibleChange = new EventEmitter<boolean>();

    focusVisible = false;

    constructor() {
        this.autoIdString = `${TUI}${AbstractTuiInteractive.autoId++}${Date.now()}`;
    }

    @HostBinding(`class._disabled`)
    get computedDisabled(): boolean {
        return this.disabled;
    }

    get computedFocusable(): boolean {
        return !this.computedDisabled && (this.focusable || this.focused);
    }

    @HostBinding(`class._focused`)
    get computedFocused(): boolean {
        return !this.computedDisabled && (this.pseudoFocus ?? this.focused);
    }

    @HostBinding(`class._focus-visible`)
    get computedFocusVisible(): boolean {
        return !this.computedDisabled && (this.pseudoFocus ?? this.focusVisible);
    }

    // TODO: 3.0 Consider removing since native input is exposed
    get id(): string {
        return this.nativeId || this.autoIdString;
    }

    protected updateFocused(focused: boolean): void {
        this.focusedChange.emit(focused);
    }

    protected updateFocusVisible(focusVisible: boolean): void {
        if (this.focusVisible === focusVisible) {
            return;
        }

        this.focusVisible = focusVisible;
        this.focusVisibleChange.emit(focusVisible);
    }
}
