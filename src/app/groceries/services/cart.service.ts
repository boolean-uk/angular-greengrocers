import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart: CartItem[] = [];

  constructor() {}

  get cart() {
    return this._cart;
  }

  addToCart(item: Item) {
    const existingItem = this._cart.find((i) => i.item.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this._cart.push({ item, quantity: 1 });
    }
  }

  removeFromCart(item: Item) {
    const index = this._cart.findIndex((i) => i.item.id === item.id);
    if (index >= 0) {
      if (this._cart[index].quantity > 1) {
        this._cart[index].quantity--;
      } else {
        this._cart.splice(index, 1);
      }
    }
  }

  getCartTotal() {
    return this._cart.reduce((acc, i) => acc + i.item.price * i.quantity, 0);
  }

  changeQuantity(item: Item, quantity: number) {
    if (quantity < 1) {
      this.removeFromCart(item);
      return;
    }
    const existingItem = this._cart.find((i) => i.item.id === item.id);
    if (existingItem) {
      existingItem.quantity = quantity;
    }
  }
}

export interface CartItem {
  item: Item;
  quantity: number;
}
