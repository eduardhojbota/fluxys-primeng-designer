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
      :host ::ng-deep .p-menu.nav-menu .p-menuitem-link.p-menuitem-link-active {
        text-decoration: underline;
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
        { label: 'AutoComplete', routerLink: ['./autocomplete'] },
        { label: 'Calendar', routerLink: ['./calendar'] },
        { label: 'Checkbox', routerLink: ['./checkbox'] },
        { label: 'Chips', routerLink: ['./chips'] },
        { label: 'ColorPicker', routerLink: ['./colorpicker'] },
        { label: 'Dropdown', routerLink: ['./dropdown'] },
        { label: 'InputGroup', routerLink: ['./inputgroup'] },
        { label: 'InputMask', routerLink: ['./inputmask'] },
        { label: 'InputSwitch', routerLink: ['./inputswitch'] },
        { label: 'InputText', routerLink: ['./inputtext'] },
        { label: 'InputTextArea', routerLink: ['./inputtextarea'] },
        { label: 'InputNumber', routerLink: ['./inputnumber'] },
        { label: 'FloatLabel', routerLink: ['./floatlabel'] },
        { label: 'KeyFilter', routerLink: ['./keyfilter'] },
        { label: 'Listbox', routerLink: ['./listbox'] },
        { label: 'MultiSelect', routerLink: ['./multiselect'] },
        { label: 'Password', routerLink: ['./password'] },
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
        { label: 'Tooltip', routerLink: ['./tooltip'] },
      ],
    },
    { separator: true },
    {
      label: 'Menu',
      items: [{ label: 'TabMenu', routerLink: ['./tabmenu'] }],
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
