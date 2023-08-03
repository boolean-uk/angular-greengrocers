import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from './app/models/item';
import { CartItem } from './app/models/cart-item';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GrocersService {
  private totalObservable: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private total: number = 0;
  cart: CartItem[] = [];

  constructor(private readonly http: HttpClient) { }

  getGroceries(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.apiUrl);
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  addItemToCart(item: Item): void {
    const existingCartItem = this.cart.find(cartElement => cartElement.item.id === item.id);

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      this.cart.push({ item, quantity: 1 });
    }

    this.countTotalPrice();
  }

  decreaseQuantity(cartItem: CartItem): void {
    if (cartItem.quantity - 1 > 0) {
      cartItem.quantity--;
    } else {
      const indexToRemove = this.cart.findIndex((cartElement) => cartElement.item.id === cartItem.item.id);
      this.cart.splice(indexToRemove, 1);
    }
    this.countTotalPrice();
  }

  increaseQuantity(cartItem: CartItem): void {
    cartItem.quantity++;
    this.countTotalPrice();
  }

  countTotalPrice(): void {
    this.total = this.cart.reduce((sum, cartElement) => sum + cartElement.item.price * cartElement.quantity, 0);
    this.total = Number(this.total.toFixed(2));
    this.totalObservable.next(this.total);
  }

  getTotalPrice(): Observable<number> {
    return this.totalObservable.asObservable();
  }
}
