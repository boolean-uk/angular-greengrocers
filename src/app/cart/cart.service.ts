import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Cart } from '../models/cart';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = { items: [] }
  private cartSubject$ = new BehaviorSubject<Cart>(this.cart);

  getCart(): Observable<Cart> {
    return this.cartSubject$.asObservable()
  }

  addToCart(item: Item) {
    const cartItem = this.cart.items.find(cartItem => cartItem.item.id == item.id)
    if(cartItem) {
      cartItem.quantity++
      return
    }

    this.cart.items.push({
      item,
      quantity: 1
    })
  
    this.cartSubject$.next(this.cart)
  }

  removeFromCart(item: Item) {
    const cartItem = this.cart.items.find(cartItem => cartItem.item.id == item.id)
    if(!cartItem)
      return
    
    cartItem.quantity--
    if(cartItem.quantity <= 0) {
      const index = this.cart.items.indexOf(cartItem)
      if(index != -1)
        this.cart.items.splice(index, 1)
    }

    this.cartSubject$.next(this.cart)
  }

}
