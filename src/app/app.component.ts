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
  groceries: Item[] = [
    { id: '001-beetroot', name: 'Beetroot', price: 1.99 },
    { id: '002-carrot', name: 'Carrot', price: 0.89 },
    { id: '003-apple', name: 'Apple', price: 2.49 },
    { id: '004-apricot', name: 'Apricot', price: 0.75 },
    { id: '005-avocado', name: 'Avocado', price: 3.99 },
    { id: '006-bananas', name: 'Bananas', price: 1.25 },
    { id: '007-bell-pepper', name: 'Bell Pepper', price: 0.65 },
    { id: '008-berry', name: 'Berry', price: 1.95 },
    { id: '009-blueberry', name: 'Blueberry', price: 1.10 },
    { id: '010-eggplant', name: 'Eggplant', price: 1.49 },
  ];
  cart: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchGroceries();
  }

  fetchGroceries() {
    const apiUrl = 'https://boolean-api-server.fly.dev/api/groceries';

    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.groceries = data;
      },
      (error) => {
        console.error('Error fetching groceries:', error);
      }
    );
  }

  addToCart(item: any) {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
  }

  decreaseQuantity(item: any): void {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity--;
      if (existingItem.quantity === 0) {
        this.removeFromCart(item);
      }
    }
  }

  removeFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
  }

  increaseQuantity(item: any) {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    }
  }
  

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}