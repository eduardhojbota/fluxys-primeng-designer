import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [
    `
      .p-button,
      p-button {
        margin: 0 0.5rem 0.5rem 0;
      }
      /* reset the margin for button set */
      .p-buttonset > .p-button {
        margin: 0;
      }
    `,
  ],
})
export class ButtonComponent {}
