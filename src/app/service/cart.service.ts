import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: BehaviorSubject<Map<Item, number>> = new BehaviorSubject<Map<Item, number>>(new Map());
  cartItems$ = this.cartItems.asObservable();

  totalPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPrice.asObservable();


  constructor() {
    this.totalPrice.next(0);
  }

  addToCart(item: Item) {
    const currentItems = this.cartItems.value;
    const itemCount = currentItems.get(item) || 0;
    currentItems.set(item, itemCount + 1);
    this.cartItems.next(new Map(currentItems));
    this.updateTotalPrice();
  }

  removeFromCart(item: Item) {
    const currentItems = this.cartItems.value;
    const itemCount = currentItems.get(item) || 0;
    if (itemCount > 1) {
      currentItems.set(item, itemCount - 1);
      this.cartItems.next(new Map(currentItems));
    }
    if (itemCount === 1) {
      currentItems.delete(item);
      this.cartItems.next(new Map(currentItems));
    }
    this.updateTotalPrice();
  }

  private updateTotalPrice() {
    const currentItems = this.cartItems.value;
    const totalPrice = Array.from(currentItems).reduce((acc, [item, count]) => {
      return acc + item.price * count;
    }, 0);
    this.totalPrice.next(totalPrice);
  }
}
