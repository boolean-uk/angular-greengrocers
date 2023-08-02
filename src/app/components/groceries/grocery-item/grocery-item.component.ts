import {Component, Input} from '@angular/core';
import {Vegetable} from "../../../models/vegetable";
import {CartSummaryService} from "../../../services/cart-summary.service";

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent {
  @Input('item') item: Vegetable | null = null

  constructor(private readonly cartService: CartSummaryService) {
  }

  addToCart() {
    this.cartService.add(this.item!)
  }
}
