import { Component, OnInit } from '@angular/core';

import { Product } from '../../../domain/model';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss'],
})
export class PickListComponent implements OnInit {
  sourceProducts: Product[];
  targetProducts: Product[];

  constructor(private readonly carService: ProductService) {}

  ngOnInit() {
    this.carService.getProductsSmall().then((products) => (this.sourceProducts = products));
    this.targetProducts = [];
  }
}
