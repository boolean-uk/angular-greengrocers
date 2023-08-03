import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Item } from '../app/models/item';
import { CartItem } from 'src/app/models/cartItem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  cartItems: CartItem[] = [];
  totalCost!: number;
  message$: BehaviorSubject<number> = new BehaviorSubject(0);

  items$ = new BehaviorSubject<Item[]>([]);

  constructor(private readonly http: HttpClient) {}
  // old method with promise
  // async getAllItems(): Promise<Item[]> {
  //   const items = await firstValueFrom(
  //     this.http.get<Item[]>(`${environment.apiUrl}`)
  //   );
  //   return items;
  // }

  fetchAll() {
    this.http
      .get<Item[]>(`${environment.apiUrl}`)
      .subscribe((x) => this.items$.next(x));
  }

  fetchVegetables() {
    this.http
      .get<Item[]>(`${environment.vegetables}`)
      .subscribe((x) => this.items$.next(x));
  }

  fetchFruits() {
    this.http
      .get<Item[]>(`${environment.fruits}`)
      .subscribe((x) => this.items$.next(x));
  }

  getAllItemsInCart() {
    return this.cartItems;
  }

  addToCart(item: Item) {
    const foundItem = this.cartItems.find((el) => el.item === item);
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.cartItems.push(new CartItem(item));
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

  getTotalPriceAfterAdding() {
    this.totalCost = 0.0;
    this.cartItems.forEach((element) => {
      this.totalCost += element.item.price * element.quantity;
    });
    return this.totalCost;
  }
}
