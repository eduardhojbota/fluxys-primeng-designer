import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
})
export class ToggleButtonComponent {
  checked1: boolean = false;
  checked2: boolean = true;
}
