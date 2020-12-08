import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../domain/model';

@Component({
  selector: 'app-product-list-demo',
  templateUrl: './product-list-demo.component.html',
  styleUrls: ['./product-list-demo.component.scss'],
})
export class ProductListDemoComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(products => this.products = products);
  }

  selectProduct(product: Product): void {
    this.ref.close(product);
  }
}
