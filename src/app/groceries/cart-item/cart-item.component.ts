import { Component, Input } from '@angular/core';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input('cartItem') cartItem: CartItem | null = null;

  constructor(private cartServise: CartService) {}

  getImagePath() {
    if (!this.cartItem) return '';
    const id = this.cartItem.item.id.toString().padStart(3, '0');
    return `./assets/icons/${id}.svg`;
  }

  changeQuantity(quantity: number) {
    if (!this.cartItem) return;
    this.cartServise.changeQuantity(this.cartItem.item, quantity);
  }

  removeFromCart() {
    if (!this.cartItem) return;
    this.cartServise.removeFromCart(this.cartItem.item);
  }

  addToCart() {
    if (!this.cartItem) return;
    this.cartServise.addToCart(this.cartItem.item);
  }
}
