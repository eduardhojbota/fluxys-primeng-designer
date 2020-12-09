import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-astra',
  templateUrl: './astra.component.html',
  styles: [
    `
      :host {
        display: block;
        min-height: calc(100vh - 153px);
      }
      .p-grid {
        flex-wrap: nowrap;
      }
    `,
  ],
})
export class AstraComponent {
  readonly menu: MenuItem[] = [
    {
      label: 'Home',
      items: [
        { label: 'Home', routerLink: ['/', 'astra'] },
      ],
    },
    { separator: true },
    {
      label: 'Form',
      items: [
        { label: 'Calendar', routerLink: ['/', 'astra', 'calendar'] },
      ],
    },
    { separator: true },
    {
      label: 'Button',
      items: [
        { label: 'Button', routerLink: ['/', 'astra', 'button'] },
        { label: 'SplitButton', routerLink: ['/', 'astra', 'splitbutton'] },
      ],
    },
    { separator: true },
    {
      label: 'Overlay',
      items: [
        { label: 'ConfirmDialog', routerLink: ['/', 'astra', 'confirmdialog'] },
        { label: 'Dialog', routerLink: ['/', 'astra', 'dialog'] },
        { label: 'DynamicDialog', routerLink: ['/', 'astra', 'dynamicdialog'] },
      ],
    },
    { separator: true },
    {
      label: 'Messages',
      items: [
        { label: 'Messages', routerLink: ['/', 'astra', 'messages'] },
        { label: 'Toast', routerLink: ['/', 'astra', 'toast'] },
      ],
    },
  ];
}
