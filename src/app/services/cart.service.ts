import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = new Map<Item, Number>()

  addItemToCart(item: Item) {
    if (!this.cart.has(item)) this.cart.set(item, 1) 
    else this.cart.set(item, 1 + Number(this.cart.get(item)))
  }
}
