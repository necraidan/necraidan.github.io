import { Component } from '@angular/core';
import { WHO_AM_I } from './main.constants';

@Component({
  selector: 'nec-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  WHO_AM_I = WHO_AM_I;
}
