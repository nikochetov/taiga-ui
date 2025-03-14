import {AfterViewChecked, Directive, ElementRef, Inject, Input} from '@angular/core';

/**
 * A directive for projecting classes from nested children to host
 */
@Directive({
    selector: '[tuiProjectClass]',
})
export class TuiProjectClassDirective implements AfterViewChecked {
    @Input('tuiProjectClass')
    classNames: readonly string[] = [];

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {}

    ngAfterViewChecked(): void {
        this.classNames.forEach(className => {
            const hostElement = this.el.nativeElement;

            hostElement.classList.toggle(
                className,
                !!hostElement.querySelector(`.${className}`),
            );
        });
    }
}
