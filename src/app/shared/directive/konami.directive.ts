import { EventEmitter, Directive, Output, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[konami]'
})
export class KonamiDirective {
    @Output() konami: EventEmitter<void> = new EventEmitter();

    private seq: string[] = [];

    private konamiCode: string[] = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65'];

    constructor() {}

    // tslint:disable-next-line:no-unused-expression
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.keyCode) {
            this.seq.push(event.keyCode.toString());

            // tslint:disable:no-unused-expression
            this.seq.length > this.konamiCode.length && this.seq.shift();

            this.isKonamiCode() && this.konami.emit();
        }
    }
    // tslint:enable:no-unused-expression

    isKonamiCode(): boolean {
        return this.konamiCode.every((code: string, index: number) => code === this.seq[index]);
    }
}
