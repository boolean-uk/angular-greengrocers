import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Item } from '../app/models/item';
import { CartItem } from 'src/app/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  cartItems: CartItem[] = [];
  totalCost!: number;
  cartItem!: CartItem;
  message: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private readonly http: HttpClient) {}

  async getAllItems(): Promise<Item[]> {
    const items = await firstValueFrom(
      this.http.get<Item[]>('https://boolean-api-server.fly.dev/groceries')
    );
    return items;
  }

  getAllItemsInCart() {
    return this.cartItems;
  }

  addToCart(item: Item) {
    const foundItem = this.cartItems.find((el) => el.item === item);
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.cartItem = new CartItem(item);
      this.cartItems.push(this.cartItem);
    }
  }

  removeFromCart(item: Item) {
    const foundItem = this.cartItems.find((el) => el.item === item);
    if (foundItem && foundItem.quantity > 0) {
      foundItem.quantity--;
      this.totalCost -= foundItem.item.price;
      if (foundItem.quantity === 0) {
        const index = this.cartItems.indexOf(foundItem);
        this.cartItems.splice(index, 1);
      }
    }
  }

  getTotalPriceAfterAdding(){
    this.totalCost = 0.0;
    this.cartItems.forEach(element => {
      this.totalCost += element.item.price * element.quantity;
    });
    return this.totalCost;
  }
}
