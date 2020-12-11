import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-astra',
  templateUrl: './astra.component.html',
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: [nav] auto [main] 1fr [end];
        gap: 0 0;
        min-height: 100vh;
      }
      nav {
        grid-column-start: nav;
        grid-column-end: main;
        max-height: 100vh;
        overflow-y: auto;
      }
      main {
        grid-column-start: main;
        grid-column-end: end;
        max-height: 100vh;
        overflow: hidden auto;
        padding: 1rem;
      }
      :host ::ng-deep .p-menu.nav-menu {
        border-radius: 0;
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
        { label: 'InputText', routerLink: ['./inputtext'] },
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
      label: 'Panel',
      items: [{ label: 'Card', routerLink: ['./card'] }],
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
      label: 'Menu',
      items: [
        { label: 'TabMenu', routerLink: ['./tabmenu'] },
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
      items: [{ label: 'Badge', routerLink: ['./badge'] }],
    },
  ];
}
