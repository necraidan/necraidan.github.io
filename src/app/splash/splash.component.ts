import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'splash',
    templateUrl: 'splash.component.html',
    styleUrls: ['splash.component.scss']
})
export class SplashComponent {
    constructor(private _renderer: Renderer2, private _el: ElementRef) {}

    invertColor() {
        this._renderer.addClass(this._el.nativeElement.children[0], 'inverted');
    }
}
