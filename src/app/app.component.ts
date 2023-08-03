import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export interface Item {
  id: string;
  name: string;
  type: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-green-grocers';
  groceries: Item[] = [];
  cart: { item: Item; quantity: number }[] = [];
  selectedType: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchGroceries();
  }

  fetchGroceries() {
    let apiUrl = environment.apiUrl + 'groceries';
    if (this.selectedType) {
      apiUrl += `?type=${this.selectedType}`;
    }
    
    this.http.get<Item[]>(apiUrl).subscribe(
      (data) => {
        this.groceries = data;
      },
      (error) => {
        console.error('Error fetching groceries:', error);
      }
    );
  }

  addToCart(item: Item) {
    const cartItem = this.cart.find((itemInCart) => itemInCart.item.id === item.id);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ item: item, quantity: 1 });
    }
  }

  removeFromCart(cartItem: { item: Item; quantity: number }) {
    const index = this.cart.findIndex((item) => item.item.id === cartItem.item.id);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  updateQuantity(cartItem: { item: Item; quantity: number }, quantity: number) {
    cartItem.quantity = quantity;
    if (cartItem.quantity < 1) {
      this.removeFromCart(cartItem);
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0);
  }

  filterByType(type: string | null) {
    this.selectedType = type;
    this.fetchGroceries();
  }
  sortByPrice() {
    this.groceries.sort((a, b) => a.price - b.price);
  }
  sortByName() {
    this.groceries.sort((a, b) => a.name.localeCompare(b.name));
  }
}
