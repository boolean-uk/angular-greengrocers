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

  itemList: Item[] = [];
  shoppingCart: CartItem[] = [];
  subscription: Subscription | null = null;
  filterItems: boolean = true;
  sortedType = '';
  nameSort: boolean = true;
  priceSort: boolean = true;

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
      else {
        const index = this.shoppingCart.indexOf(itemToChange);
        if (index !== -1) {
          this.shoppingCart.splice(index, 1);
        }
      }
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

  filterByType() {
    this.subscription = this.shoppingService.getItems().subscribe((items) => {
      this.itemList = items.filter((item) =>
        this.filterItems ? item.type === 'fruit' : item.type === 'vegetable'
      );

      if (this.sortedType === 'price') {
        this.sortByPrice();
      } else if (this.sortedType === 'name') {
        this.sortByName();
      }
    });

    this.filterItems = !this.filterItems;
  }

  sortByName() {
    this.itemList = this.itemList.sort((a, b) =>
      this.nameSort === true
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    this.nameSort = !this.nameSort;
    this.sortedType = 'name';
  }

  sortByPrice() {
    this.itemList = this.itemList.sort((a, b) =>
      this.priceSort === true
        ? a.price.toLocaleString().localeCompare(b.price.toLocaleString())
        : b.price.toLocaleString().localeCompare(a.price.toLocaleString())
    );
    this.priceSort = !this.priceSort;
    this.sortedType = 'price';
  }
}
