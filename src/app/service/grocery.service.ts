import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  cart: CartItem[] = [];

  constructor(private readonly http: HttpClient) {}

  items: Promise<Item[]> = this.getAllGroceries();

  async getAllGroceries() {
    const response = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}`)
    );
    return response;
  }

  async getItems() {
    return this.items;
  }

  addItem(item : Item) {
    const cartItem = this.cart.find((cartItem) => cartItem.item === item);
    if(cartItem) {
      cartItem.quantity +=1;
    }else {
      this.cart.push({ item: item, quantity: 1 });
    }
  }

  getCart() {
    return this.cart;
  }

  increaseQuantity(item: CartItem) {
    item.quantity += 1;
  }

  decreaseQuantity(item: CartItem) {
    const itemInCart = this.cart.find((cartItem) => cartItem === item);
    if (itemInCart) {
      if (itemInCart.quantity > 1) itemInCart.quantity--;
      else {
        const index = this.cart.indexOf(itemInCart);
        this.cart.splice(index, 1);
      }
    }
  }

  getTotalPrice() : number {
    return this.cart.reduce(
      (totalPrice, cartItem) =>
        totalPrice + cartItem.item.price * cartItem.quantity,
      0
    );
  }

  async getItemsByPrice() {   
  (await this.items).sort((a, b) => a.price - b.price);

  }
  async getItemsByName() {

    (await this.items).sort((a, b) => a.name.localeCompare(b.name));
  }
}