import { Component, ElementRef, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

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

  launchConfetti() {
    const end = Date.now() + 15 * 1000;

    // go Buckeyes!
    const colors = ['#bb00ee', '#00112233'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: {
          x: 0
        },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: {
          x: 1
        },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}
