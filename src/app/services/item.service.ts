import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Item} from "../models/item";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = environment.apiUrl;
  private cart: Map<Item, number> = new Map();
  private total: number =0;

  private cartUpdatedSubject = new BehaviorSubject<void>(undefined);
  cartUpdated$ = this.cartUpdatedSubject.asObservable();

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
    this.cartUpdatedSubject.next();

  }

  clearCart() {
    this.cart.clear();
    this.cartUpdatedSubject.next();

  }

  deleteFromCart(item: Item, quantity?: number) {
    if (quantity) {
      const existingQuantity = this.cart.get(item);
      if (existingQuantity && quantity <= existingQuantity) {
        const newQuantity = existingQuantity - quantity;
        if (newQuantity === 0) {
          this.cart.delete(item);
        } else {
          this.cart.set(item, newQuantity);
        }
      }
    } else {
      this.cart.delete(item);
    }
    this.cartUpdatedSubject.next();

  }

  calculateTotal(): number {
    this.total =0;
    this.cart.forEach((quantity, item) => {
      this.total += item.price * quantity;
    });
    return this.total;
  }

  getCartItems(): Map<Item, number>{
    return this.cart;
  }

  async getItemsByType(type: string): Promise<Item[]> {
    try {
      const response = await this.http.get<Item[]>(`${this.apiUrl}groceries`).toPromise();
      if (Array.isArray(response)) {
        const itemsByType = response.filter((item) => item.type === type);
        return itemsByType;
      } else {
        console.error('Invalid response format or no data returned.');
        return [];
      }
    } catch (error) {
      console.error('Error while fetching items:', error);
      return [];
    }
  }

}
