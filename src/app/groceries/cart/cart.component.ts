import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  get cart() {
    return this.cartService.cart;
  }

  getCartTotal() {
    return this.cartService.getCartTotal();
  }
}
