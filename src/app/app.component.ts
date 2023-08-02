import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingService } from './services/shopping.service';
import { Item } from './models/item';
import { CartItem } from './models/cartItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-green-grocers';

  itemList: Item[] | null = null;
  shoppingCart: CartItem[] = [];
  subscription: Subscription | null = null;
  constructor(private shoppingService: ShoppingService) {}

  getItems(): void {
    this.subscription = this.shoppingService
      .getItems()
      .subscribe((items) => (this.itemList = items));
  }

  getShoppingCart() {
    return this.shoppingCart;
  }
  ngOnInit() {
    this.getItems();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  addToCart(item: Item, quantity: number = 1) {
    const existingCartItem = this.shoppingCart.find(
      (cartItem) => cartItem.item === item
    );
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      this.shoppingCart.push({ item, quantity });
    }
  }
  decreaseQuantity(cartItem: CartItem): void {
    const itemToChange = this.shoppingCart.find((item) => item === cartItem);
    if (itemToChange) {
      if (itemToChange.quantity > 1) itemToChange.quantity--;
    }
  }

  increaseQuantity(cartItem: CartItem): void {
    const itemToChange = this.shoppingCart.find((item) => item === cartItem);
    if (itemToChange) {
      itemToChange.quantity++;
    }
  }

  totalPrice() {
    return this.shoppingCart.reduce(
      (totalPrice, cartItem) =>
        totalPrice + cartItem.item.price * cartItem.quantity,
      0
    );
  }
}
