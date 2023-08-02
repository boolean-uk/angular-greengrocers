import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { BehaviorSubject, scan, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartItems: ItemInCart[] = []

  private refresh$ = new BehaviorSubject<ItemInCart[]>(this.cartItems)
  private priceRefresh$ = new BehaviorSubject<number>(0)

  cartItems$ = this.refresh$.asObservable();


  totalPrice$ = this.cartItems$.pipe(
    scan((total, cartItems) => {
      return cartItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
    },0)
  )
  
  addToCart(item: Item) {

    const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.item.id === item.id);

    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += 1;
    } else {
      this.cartItems.push({ item, quantity: 1 });
    }
    this.refresh$.next([...this.cartItems]);
  }

  changeQuantity() {
    this.refresh$.next([...this.cartItems]);
  }

  delete(item: Item) {
    const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.item.id === item.id);
    if (existingItemIndex !== -1) {
      this.cartItems.splice(existingItemIndex, 1)
      this.refresh$.next([...this.cartItems]);
    }
  }




}
export interface ItemInCart{
  item: Item
  quantity: number
}