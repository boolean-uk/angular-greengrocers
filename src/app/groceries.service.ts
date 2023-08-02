import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from './models/item';
import { CartItem } from './models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  constructor(private readonly http: HttpClient) {}

  cart: CartItem[] = [];
  totalSubject = new BehaviorSubject<number>(0);
  total$: Observable<number> = this.totalSubject.asObservable();

  getAllGroceries() {
    return this.http.get<Item[]>(`${environment.apiUrl}` + 'groceries');
  }

  addToCart(item: Item) {
    let founedItem = this.cart.find((element) => element.item.id == item.id);
    if (founedItem) {
      this.increaseQuantity(founedItem);
    } else {
      const itemToAdd = {
        item: item,
        quantity: 1,
      };
      this.cart.push(itemToAdd);
    }

    this.calculateTotal();
  }

  removeFromCart(cartItem: CartItem) {
    this.cart.splice(this.cart.indexOf(cartItem, 0), 1);
  }

  getCart() {
    return this.cart;
  }

  increaseQuantity(cartItem: CartItem) {
    this.cart.find((element) => element.item.id == cartItem.item.id)!
      .quantity++;
    this.calculateTotal();
  }

  decreaseQuantity(cartItem: CartItem) {
    let founedItem = this.cart.find(
      (element) => element.item.id == cartItem.item.id
    )!;
    if (founedItem.quantity == 1) {
      this.removeFromCart(cartItem);
    } else {
      founedItem.quantity--;
    }
    this.calculateTotal();
  }

  calculateTotal() {
    let calculatedTotal = 0;
    this.cart.forEach((element) => {
      calculatedTotal += element.item.price * element.quantity;
    });
    this.totalSubject.next(calculatedTotal);
  }
}
