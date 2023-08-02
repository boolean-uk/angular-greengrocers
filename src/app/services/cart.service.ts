import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<Map<Item, number>>(new Map());

  constructor() {}

  addToCart(item: Item): void {
    let currentCartItems = this.cartItems.value;
    if (currentCartItems.has(item)) {
      const currentQuantity = currentCartItems.get(item)!;
      currentCartItems.set(item, currentQuantity + 1);
    } else {
      currentCartItems.set(item, 1);
    }
    this.cartItems.next(currentCartItems);
    console.log(this.cartItems);
  }

  getCartItems(): Observable<Map<Item, number>> {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems.next(new Map());
  }
}
