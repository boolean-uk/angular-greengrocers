import { Component, Input } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;

  constructor(private readonly groceriesService: GroceriesService) {}

  decreaseQuantity() {
    this.groceriesService.decreaseQuantity(this.cartItem);
  }

  increaseQuantity() {
    this.groceriesService.increaseQuantity(this.cartItem);
  }
}
