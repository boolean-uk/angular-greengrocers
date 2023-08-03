import {Component, Input} from '@angular/core';
import {Groceries} from "../../../models/groceries";
import {CartSummaryService} from "../../../services/cart-summary.service";

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent {
  @Input('item') item: Groceries | null = null

  constructor(private readonly cartService: CartSummaryService) {
  }

  addToCart() {
    this.cartService.add(this.item!)
  }
}
