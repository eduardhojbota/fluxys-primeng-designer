import { Component, OnInit } from '@angular/core';

import { Product } from '../../../domain/model';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsSmall().then((cars) => (this.products = cars));
  }
}
