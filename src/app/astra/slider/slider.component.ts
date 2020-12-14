import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [`
  :host ::ng-deep .p-inputtext {
    width: 14rem;
  }
  :host ::ng-deep .p-slider-vertical {
    height: 100px;
  }
  :host ::ng-deep .p-slider-horizontal {
    width: 14rem;
  }
  `]
})
export class SliderComponent {
  val1: number;
  val2: number = 50;
  val3: number;
  val4: number;
  rangeValues: number[] = [20,80];
}
