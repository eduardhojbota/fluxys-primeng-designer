import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent {
  color1: string;
  color2 = '#1976d2';
}
