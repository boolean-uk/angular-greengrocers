import {Injectable} from '@angular/core';
import {Vegetable} from "../models/vegetable";

@Injectable({
  providedIn: 'root'
})
export class CartSummaryService {
  cart: cartItem[] = []


  constructor() {
  }

  total(): number {
    return this.cart.map((item: cartItem) => item.quantity * item.item.price)
      .reduce((sum, current) => sum + current, 0)
  }

  add(item: Vegetable) {
    const index: number = this.cart.findIndex((cartItem: cartItem): boolean => cartItem.item === item);

    if (index === -1) {
      this.cart.push(<cartItem>{
        item: item, quantity: 1
      })
      return;
    }
    this.cart[index].quantity += 1
    return;
  }
}


export interface cartItem {
  item: Vegetable
  quantity: number
}
