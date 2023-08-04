import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css']
})
export class TotalCostComponent {
  @Input() totalCost: number;


  constructor(private productService: ProductService) {
    this.totalCost = 0
  }

  // async ngOnInit() {
  //   await this.getTotalCost();
  // }

  // private async getTotalCost() {
  //   this.totalCost = await this.productService.getTotalCost(this.products);
  // }
}
