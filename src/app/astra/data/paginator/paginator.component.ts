import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styles: [
    `
      .p-button.p-button-icon-only {
        border-radius: 0;
      }
      .image-gallery {
        text-align: center;
        padding: 1rem;
      }
    `,
  ],
})
export class PaginatorComponent {
  first = 0;
  totalRecords = 120;
  totalRecords2 = 12;

  onPageChange(event) {
    this.first = event.first;
  }

  refresh() {
    this.first = 0;
  }
}
