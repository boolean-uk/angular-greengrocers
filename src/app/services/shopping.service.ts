import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/cartItem';
@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private itemList: Item[] = [];
  private shoppingCart: CartItem[] = [];

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}`);
  }
  getShoppingCart(): CartItem[] {
    return this.shoppingCart;
  }
  addItemToCart(item: Item, quantity: number = 1) {
    const existingCartItem = this.shoppingCart.find(
      (cartItem) => cartItem.item === item
    );
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      this.shoppingCart.push({ item, quantity });
    }
  }
}
