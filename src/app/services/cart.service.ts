import { Injectable } from '@angular/core';
import {Item, Product} from "../models/item";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addToCart(item: Item): void {
    const existingProductIndex = this.cartItems.findIndex((product) => product.id === item.id);

    if (existingProductIndex !== -1) {
      this.cartItems[existingProductIndex].quantity++;
    } else {
      const product: Product = {
        ...item,
        quantity: 1,
      };
      this.cartItems.push(product);
    }

    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(item: Item): void {
    const existingProductIndex = this.cartItems.findIndex((product) => product.id === item.id);

    if (existingProductIndex !== -1) {
      this.cartItems[existingProductIndex].quantity--;

      if (this.cartItems[existingProductIndex].quantity <= 0) {
        this.cartItems.splice(existingProductIndex, 1);
      }
    }

    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getCartItems$(): BehaviorSubject<Product[]> {
    return this.cartItemsSubject;
  }
}
