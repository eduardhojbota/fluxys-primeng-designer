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
      items: [{ label: 'Home', routerLink: ['./'] }],
    },
    { separator: true },
    {
      label: 'Form',
      items: [
        { label: 'Calendar', routerLink: ['./calendar'] },
        { label: 'Checkbox', routerLink: ['./checkbox'] },
        { label: 'InputSwitch', routerLink: ['./inputswitch'] },
        { label: 'RadioButton', routerLink: ['./radiobutton'] },
        { label: 'SelectButton', routerLink: ['./selectbutton'] },
      ],
    },
    { separator: true },
    {
      label: 'Button',
      items: [
        { label: 'Button', routerLink: ['./button'] },
        { label: 'SplitButton', routerLink: ['./splitbutton'] },
      ],
    },
    { separator: true },
    {
      label: 'Overlay',
      items: [
        { label: 'ConfirmDialog', routerLink: ['./confirmdialog'] },
        { label: 'Dialog', routerLink: ['./dialog'] },
        { label: 'DynamicDialog', routerLink: ['./dynamicdialog'] },
      ],
    },
    { separator: true },
    {
      label: 'Messages',
      items: [
        { label: 'Messages', routerLink: ['./messages'] },
        { label: 'Toast', routerLink: ['./toast'] },
      ],
    },
    { separator: true },
    {
      label: 'Misc',
      items: [
        { label: 'Badge', routerLink: ['./badge'] },
      ]
    }
  ];
}
