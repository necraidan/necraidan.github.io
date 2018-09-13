import { EventEmitter, Directive, Output, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[konami]'
})
export class KonamiDirective {
    @Output() konami: EventEmitter<void> = new EventEmitter();

    private _seq: string[] = [];

    private _konamiCode: string[] = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65'];

    constructor() {}

    // tslint:disable-next-line:no-unused-expression
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.keyCode) {
            this._seq.push(event.keyCode.toString());

            // tslint:disable:no-unused-expression
            this._seq.length > this._konamiCode.length && this._seq.shift();

            this.isKonamiCode() && this.konami.emit();
        }
    }
    // tslint:enable:no-unused-expression

    isKonamiCode(): boolean {
        return this._konamiCode.every((code: string, index: number) => code === this._seq[index]);
    }
}
