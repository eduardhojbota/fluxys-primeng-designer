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
        { label: 'AutoComplete', routerLink: ['./form/autocomplete'] },
        { label: 'Calendar', routerLink: ['./form/calendar'] },
        { label: 'Checkbox', routerLink: ['./form/checkbox'] },
        { label: 'Chips', routerLink: ['./form/chips'] },
        { label: 'ColorPicker', routerLink: ['./form/colorpicker'] },
        { label: 'Dropdown', routerLink: ['./form/dropdown'] },
        { label: 'InputGroup', routerLink: ['./form/inputgroup'] },
        { label: 'InputMask', routerLink: ['./form/inputmask'] },
        { label: 'InputSwitch', routerLink: ['./form/inputswitch'] },
        { label: 'InputText', routerLink: ['./form/inputtext'] },
        { label: 'InputTextArea', routerLink: ['./form/inputtextarea'] },
        { label: 'InputNumber', routerLink: ['./form/inputnumber'] },
        { label: 'FloatLabel', routerLink: ['./form/floatlabel'] },
        { label: 'KeyFilter', routerLink: ['./form/keyfilter'] },
        { label: 'Listbox', routerLink: ['./form/listbox'] },
        { label: 'MultiSelect', routerLink: ['./form/multiselect'] },
        { label: 'Password', routerLink: ['./form/password'] },
        { label: 'RadioButton', routerLink: ['./form/radiobutton'] },
        { label: 'Rating', routerLink: ['./form/rating'] },
        { label: 'Slider', routerLink: ['./form/slider'] },
        { label: 'SelectButton', routerLink: ['./form/selectbutton'] },
        { label: 'ToggleButton', routerLink: ['./form/togglebutton'] },
        { label: 'TriStateCheckbox', routerLink: ['./form/tristatecheckbox'] },
      ],
    },
    { separator: true },
    {
      label: 'Button',
      items: [
        { label: 'Button', routerLink: ['./button/button'] },
        { label: 'SplitButton', routerLink: ['./button/splitbutton'] },
      ],
    },
    { separator: true },
    {
      label: 'Data',
      items: [
        { label: 'DataView', routerLink: ['./data/dataview' ] },
        { label: 'OrderList', routerLink: ['./data/orderlist' ] },
        { label: 'Org Chart', routerLink: ['./data/organizationchart' ] },
        { label: 'Paginator', routerLink: ['./data/paginator' ] },
        { label: 'PickList', routerLink: ['./data/picklist' ] },
        { label: 'Table', routerLink: ['./data/table' ] },
        { label: 'Timeline', routerLink: ['./data/timeline' ] },
      ]
    },
    { separator: true },
    {
      label: 'Panel',
      items: [{ label: 'Card', routerLink: ['./panel/card'] }],
    },
    { separator: true },
    {
      label: 'Overlay',
      items: [
        { label: 'ConfirmDialog', routerLink: ['./overlay/confirmdialog'] },
        { label: 'Dialog', routerLink: ['./overlay/dialog'] },
        { label: 'DynamicDialog', routerLink: ['./overlay/dynamicdialog'] },
        { label: 'Tooltip', routerLink: ['./overlay/tooltip'] },
      ],
    },
    { separator: true },
    {
      label: 'Menu',
      items: [{ label: 'TabMenu', routerLink: ['./menu/tabmenu'] }],
    },
    { separator: true },
    {
      label: 'Messages',
      items: [
        { label: 'Messages', routerLink: ['./messages/messages'] },
        { label: 'Toast', routerLink: ['./messages/toast'] },
      ],
    },
    { separator: true },
    {
      label: 'Misc',
      items: [{ label: 'Badge', routerLink: ['./misc/badge'] }],
    },
  ];
}
