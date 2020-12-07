import { Component } from '@angular/core';

@Component({
  selector: 'app-astra',
  templateUrl: './astra.component.html',
  styles: [`
:host {
  display: block;
  min-height: calc(100vh - 153px);
}
.p-grid {
  flex-wrap: nowrap;
}
nav {
  max-height: calc(100vh - 170px);
  overflow-y: auto;
}
nav ul {
  list-style-type: none;
  padding-inline-start: 0;
}
  `],
})
export class AstraComponent {}
