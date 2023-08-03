import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-green-grocers';
  items: Item[] = [
    { id: '001-beetroot', name: 'Beetroot', price: 1.99},
    { id: '002-carrot', name: 'Carrot', price: 0.89},
    { id: '003-apple', name: 'Apple', price: 2.49},
    { id: '004-apricot', name: 'Apricot', price: 0.75},
    { id: '005-avocado', name: 'Avocado', price: 3.99},
    { id: '006-bananas', name: 'Bananas', price: 1.25},
    { id: '007-bell-pepper', name: 'Bell Pepper', price: 0.65},
    { id: '008-berry', name: 'Berry', price: 1.95},
    { id: '009-blueberry', name: 'Blueberry', price: 1.10},
    { id: '010-eggplant', name: 'Eggplant', price: 1.49 },
  ];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchGroceries();
  }

  fetchGroceries() {
    const apiUrl = 'https://boolean-api-server.fly.dev/items';
    this.http.get<Item[]>(apiUrl).subscribe(items => {
      this.items = items;
    });
  }

  cart: { item: Item, quantity: number }[] = [];

  addToCart(item: Item) {
    const existingItem = this.cart.find(cartItem => cartItem.item.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ item, quantity: 1 });
    }
  }

  changeQuantity(item: { item: Item, quantity: number }, change: number) {
    if (item.quantity + change > 0) {
      item.quantity += change;
    }
  }

  calculateTotal(): number {
    return this.cart.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0);
  }
}