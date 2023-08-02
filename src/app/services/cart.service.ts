import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Item[] = []

  addItemToCart(item: Item) {
    this.cart.push(item)
  }
}
