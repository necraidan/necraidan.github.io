import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'splash',
    templateUrl: 'splash.component.html',
    styleUrls: ['splash.component.scss']
})
export class SplashComponent {
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    invertColor() {
        this.renderer.addClass(this.el.nativeElement.children[0], 'inverted');
    }
}
