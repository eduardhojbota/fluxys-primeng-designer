import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
})
export class SelectButtonComponent implements OnInit {
  stateOptions: any[];
  paymentOptions: any[];
  justifyOptions: any[];
  value1: string = 'off';
  value2: number;
  value3: any;
  value4: string = 'off';
  value5: number;
  value6: any;

  ngOnInit(): void {
    this.stateOptions = [
      { label: 'Off', value: 'off' },
      { label: 'On', value: 'on' },
    ];

    this.paymentOptions = [
      { name: 'Option 1', value: 1, disabled: false },
      { name: 'Option 2', value: 2, disabled: true },
      { name: 'Option 3', value: 3, disabled: false },
    ];

    this.justifyOptions = [
      { icon: 'pi pi-align-left', justify: 'Left', inactive: false },
      { icon: 'pi pi-align-right', justify: 'Right', inactive: false },
      { icon: 'pi pi-align-center', justify: 'Center', inactive: false },
      { icon: 'pi pi-align-justify', justify: 'Justify', inactive: true },
    ];
  }
}
