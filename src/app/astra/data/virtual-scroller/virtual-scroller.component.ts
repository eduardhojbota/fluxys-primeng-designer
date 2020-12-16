import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, SelectItem } from 'primeng/api';

import { Product } from '../../../domain/model';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-virtual-scroller',
  templateUrl: './virtual-scroller.component.html',
  styleUrls: ['./virtual-scroller.component.scss'],
})
export class VirtualScrollerComponent implements OnInit {
  products: Product[];
  virtualProducts: Product[];
  sortKey: string;
  sortOptions: SelectItem[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = Array.from({ length: 10000 }).map(() => this.productService.generatePrduct());
    this.virtualProducts = Array.from({ length: 10000 });

    this.sortOptions = [
      { label: 'Cheapest First', value: 'price' },
      { label: 'Expensive First', value: '!price' },
    ];
  }

  loadCarsLazy(event: LazyLoadEvent): void {
    // simulate remote connection with a timeout
    setTimeout(() => {
      //load data of required page
      const loadedProducts = this.products.slice(event.first, event.first + event.rows);

      //populate page of virtual cars
      Array.prototype.splice.apply(this.virtualProducts, [...[event.first, event.rows], ...loadedProducts]);

      //trigger change detection
      this.virtualProducts = [...this.virtualProducts];
    }, 1000);
  }

  onSortChange(): void {
    if (this.sortKey.indexOf('!') === 0) this.sort(-1);
    else this.sort(1);
  }

  sort(order: number): void {
    const products = [...this.products];
    products.sort((data1, data2) => {
      const value1 = data1.price;
      const value2 = data2.price;
      const result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return order * result;
    });

    this.products = products;
  }
}
