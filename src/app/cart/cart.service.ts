import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { BehaviorSubject, scan } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartItems: ItemInCart[] = [];

  cartItems$ = new BehaviorSubject<ItemInCart[]>(this.cartItems);

  totalPrice$ = this.cartItems$.pipe(
    scan((total, cartItems) => {
      return cartItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
    }, 0)
  );


  addToCart(item: Item) {
    const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.item.id === item.id);

    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += 1;
    } else {
      this.cartItems.push({ item, quantity: 1 });
    }
    this.cartItems$.next(this.cartItems);
  }

  changeQuantity() {
    this.cartItems$.next(this.cartItems);
  }

  delete(id: string) {
    const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.item.id === id);
    if (existingItemIndex !== -1) {
      this.cartItems.splice(existingItemIndex, 1);
      this.cartItems$.next(this.cartItems);
    }
  }

  deleteAll() {
    this.cartItems.splice(0);
    this.cartItems$.next(this.cartItems)
  }

}

export interface ItemInCart {
  item: Item;
  quantity: number;
}
