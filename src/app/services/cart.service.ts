import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Item[] = []
  itemsInCart: Item[] = []

  addItemToCart(item: Item) {
    if (!this.cart.includes(item)){
      item.quantity = 1
      this.cart.push(item) 
    }
    else this.cart[this.cart.indexOf(item)].quantity += 1
  }

  addOneElementToCart(item: Item) {
    this.cart[this.cart.indexOf(item)].quantity += 1
  }

  removeOneElementFromCart(item: Item) {
    if (this.cart[this.cart.indexOf(item)].quantity === 1) this.cart.splice(this.cart.indexOf(item), 1)
    else this.cart[this.cart.indexOf(item)].quantity -= 1
  }

  calculateTotalSum(): number {
    let totalSum = 0
    for (let item of this.cart) {
      totalSum += item.price * item.quantity
    }
    return totalSum
  }
}
