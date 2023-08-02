import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from './models/item';
import { CartItem } from './models/cart-item';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  private totalPriceObservable: BehaviorSubject<number>;
  private totalPrice: number = 0;
  cart: CartItem[] = [];

  constructor(private readonly http: HttpClient) {
    this.totalPriceObservable = new BehaviorSubject<number>(0);
  }

  getGroceries() {
    return this.http.get<Item[]>(
      environment.apiUrl + environment.groceries_endpoint
    );
  }

  getCart() {
    return this.cart;
  }

  addItemToCart(item: Item) {
    const searchedElement = this.cart.find(
      (cartElement) => cartElement.item.id === item.id
    );

    if (searchedElement === undefined) this.cart.push({ item, quantity: 1 });
    else searchedElement.quantity++;
    this.countTotalPrice();
  }

  decreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity - 1 > 0) cartItem.quantity--;
    else
      this.cart.splice(
        this.cart.findIndex(
          (cartElement) => cartElement.item.id === cartItem.item.id
        ),
        1
      );

    this.countTotalPrice();
  }

  increaseQuantity(cartItem: CartItem) {
    cartItem.quantity++;
    this.countTotalPrice();
  }

  countTotalPrice() {
    this.totalPrice = 0;

    this.cart.forEach(
      (cartElement) =>
        (this.totalPrice += cartElement.item.price * cartElement.quantity)
    );

    this.totalPrice = Number(this.totalPrice.toFixed(2));
    this.totalPriceObservable.next(this.totalPrice);
  }

  getTotalPrice() {
    return this.totalPriceObservable.asObservable();
  }
}
