import { Component } from '@angular/core';
import { ProductType } from '../models/productType';
import { GroceriesFilteringService } from '../services/groceries-filtering.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  selectedProductType: ProductType = ProductType.ALL;
  ProductType = ProductType;

  constructor(
    private readonly groceriesFilteringService: GroceriesFilteringService
  ) {}

  onTypeChange(): void {
    this.groceriesFilteringService.onTypeChange(this.selectedProductType);
  }
}
