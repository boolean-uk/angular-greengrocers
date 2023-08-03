import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, switchMap } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { Item } from '../app/models/item';
import { CartItem } from '../app/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private readonly http: HttpClient) {}

  private cart: CartItem[] = [];

  private refreshCart$ = new BehaviorSubject<CartItem[]>([]);
  private cartItems$: Observable<CartItem[]> = this.refreshCart$.pipe(
    switchMap((_value) => of(this.cart))
  );

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url());
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$;
  }

  getTotalCost(): Observable<number> {
    return this.cartItems$.pipe(
      switchMap((cartItems) =>
        of(
          cartItems.reduce(
            (total, cartItem) =>
              total + cartItem.item.price * cartItem.quantity,
            0
          )
        )
      )
    );
  }

  addToCart(item: Item): void {
    const cartItem = this.getCartItem(item);

    if (!cartItem) {
      this.cart.push({ item, quantity: 1 });
    } else {
      cartItem.quantity++;
    }

    this.refreshCart$.next(this.cart);
  }

  removeItemFromCart(item: Item): void {
    const cartItem = this.getCartItem(item);

    if (!cartItem) {
      return;
    }

    if (cartItem.quantity == 1) {
      this.cart.splice(this.cart.indexOf(cartItem), 1);
    } else {
      cartItem.quantity--;
    }

    this.refreshCart$.next(this.cart);
  }

  private getCartItem(item: Item): CartItem | undefined {
    return this.cart.find((cartItem) => cartItem.item === item);
  }

  private url(): string {
    return `${env.apiUrl}groceries`;
  }
}
