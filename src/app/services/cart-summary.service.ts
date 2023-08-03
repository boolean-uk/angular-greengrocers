import {Injectable} from '@angular/core';
import {Groceries} from "../models/groceries";

@Injectable({
  providedIn: 'root'
})
export class CartSummaryService {
  cart: CartItem[] = []


  constructor() {
  }

  total(): number {
    return this.cart.map((item: CartItem) => item.quantity * item.item.price)
      .reduce((sum, current) => sum + current, 0)
  }

  add(item: Groceries) {
    const index: number = this.cart.findIndex((cartItem: CartItem): boolean => cartItem.item.name === item.name);

    if (index === -1) {
      this.cart.push(<CartItem>{
        item: item, quantity: 1
      })
      return;
    }
    this.cart[index].quantity += 1
    return;
  }

  changeQuantity(cartItem: CartItem, quantity: number) {

    let index: number = this.cart.findIndex((item: CartItem): boolean => item === cartItem);

    if (this.cart[index].quantity === 1 && quantity < 0) {
      this.cart.splice(index, 1)
      return
    }

    this.cart[index].quantity += quantity
  }
}


export interface CartItem {
  item: Groceries
  quantity: number
}
