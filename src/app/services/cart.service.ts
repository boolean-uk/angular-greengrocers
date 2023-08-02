import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Map<Item, number> = new Map<Item, number>();

  constructor() {}

  addToCart(item: Item): void {
    if (this.cartItems.has(item)) {
      const currentQuantity = this.cartItems.get(item)!;
      this.cartItems.set(item, currentQuantity + 1);
    } else {
      this.cartItems.set(item, 1);
    }
    console.log(this.cartItems);
  }

  getCartItems(): Map<Item, number> {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems.clear();
  }
}
