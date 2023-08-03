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

  removeFromCart(item: Item, quantity: number | null = null) {
    const cartItem = this.cart.items.find(cartItem => cartItem.item.id == item.id)
    if(!cartItem)
      return
    
    if(quantity == null)
      cartItem.quantity = 0
    else
      cartItem.quantity -= quantity

    if(cartItem.quantity <= 0) {
      const index = this.cart.items.indexOf(cartItem)
      if(index != -1)
        this.cart.items.splice(index, 1)
    }

    this.cartSubject$.next(this.cart)
  }

  getTotal(): number {
    return this.cart.items
      .map(cartItem => cartItem.item.price * cartItem.quantity)
      .reduce((sum, price) => sum + price, 0)
  }

}
