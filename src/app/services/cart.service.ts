import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = new Map<Item, Number>()
  itemsInCart: Item[] = []

  addItemToCart(item: Item) {
    if (!this.cart.has(item)) this.cart.set(item, 1) 
    else this.cart.set(item, 1 + Number(this.cart.get(item)))
  }

  addOneElementToCart(item: Item) {
    this.cart.set(item, Number(this.cart.get(item)) + 1)
  }

  removeOneElementFromCart(item: Item) {
    if (this.cart.get(item) === 1) this.cart.delete(item)
    else this.cart.set(item, Number(this.cart.get(item)) - 1)
  }

  calculateTotalSum(): Number {
    let totalSum = 0
    for (const [item, quantity] of this.cart) {
      totalSum += item.price * Number(quantity)
    }
    return totalSum
  }
}
