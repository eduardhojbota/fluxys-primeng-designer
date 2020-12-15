import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
})
export class RadioButtonComponent implements OnInit {
  city: string;
  selectedCategory: any = null;
  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  ngOnInit(): void {
    this.selectedCategory = this.categories.find((c) => c.key === 'R');
  }
}
