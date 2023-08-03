import { Component, Input } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { GrocersService } from 'src/grocers.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;

  constructor(private readonly grocersService: GrocersService) {}

  decreaseQuantity() {
    this.grocersService.decreaseQuantity(this.cartItem);
  }

  increaseQuantity() {
    this.grocersService.increaseQuantity(this.cartItem);
  }
}
