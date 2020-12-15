import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styles: [
    `
      .badges .p-badge,
      .badges .p-tag {
        margin: 0 0.5rem 0.5rem 0;
      }
    `,
  ],
})
export class BadgeComponent {}
