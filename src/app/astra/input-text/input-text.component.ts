import { Component } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styles: [
    `
    .sizes .p-inputtext {
      display: block;
      margin-bottom: 0.5rem;
    }
    .sizes .p-inputtext:last-child {
      margin-bottom: 0;
    }
    .p-field * {
      display: block;
    }`
  ]
})
export class InputTextComponent {
  disabled: boolean = true;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string = 'Disabled';
}
