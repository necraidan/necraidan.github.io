import { EventEmitter, Directive, Output, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[konami]'
})
export class KonamiDirective {
    // tslint:disable-next-line:no-output-rename
    @Output() konami: EventEmitter<void> = new EventEmitter();

    private _seq: string[] = [];

    private _konamiCode: string[] = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65'];

    constructor() {}

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.keyCode) {
            this._seq.push(event.keyCode.toString());

            // tslint:disable-next-line:no-unused-expression
            this._seq.length > this._konamiCode.length && this._seq.shift();

            // tslint:disable-next-line:no-unused-expression
            this.isKonamiCode() && this.konami.emit();
        }
    }

    isKonamiCode(): boolean {
        return this._konamiCode.every((code: string, index: number) => code === this._seq[index]);
    }
}
