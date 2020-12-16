import { Component } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styles: [`
    :host ::ng-deep .p-fieldset p {
      line-height: 1.5;
      margin: 0;
    }
  `]
})
export class FieldsetComponent {}
