import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = environment.apiUrl;
  private cart: Map<Item, number> = new Map();

  constructor(private http: HttpClient) {}

  async getItems(): Promise<Item[]> {
    console.log("get works")
    const response = await this.http.get<Item[]>(`${this.apiUrl}groceries`).toPromise();
    return response || [];
  }

  addToCart(item: Item, quantity: number) {
    if (this.cart.has(item)) {
      const existingQuantity = this.cart.get(item)!;
      this.cart.set(item, existingQuantity + quantity);
    } else {
      this.cart.set(item, quantity);
    }
    console.log(this.cart)
  }

  clearCart() {
    this.cart.clear();
  }

  deleteFromCart(item: Item, quantity: number) {
    const existingQuantity = this.cart.get(item);
    if (existingQuantity && quantity <= existingQuantity) {
      const newQuantity = existingQuantity - quantity;
      if (newQuantity <= 0) {
        this.cart.delete(item);
      } else {
        this.cart.set(item, newQuantity);
      }
    }
    console.log(this.cart)
  }

  calculateTotal(): number {
    let total = 0;
    this.cart.forEach((quantity, item) => {
      total += item.price * quantity;
    });
    return total;
  }


}
