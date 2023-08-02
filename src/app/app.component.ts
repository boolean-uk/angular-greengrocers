import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { GroceryService } from './grocery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  groceries: Item[] = [];
  displayedGroceries: Item[] = [];
  title = 'angular-green-grocers';
  cart: { item: Item, quantity: number }[] = [];
  selectedType: string = '';
  
  constructor(private groceryService: GroceryService) { }


  ngOnInit() {
    this.getGroceries();
  }

  getGroceries() {
    this.groceryService.getGroceries().subscribe({
      next: (data: Item[]) => {
        this.groceries = data;
        this.displayedGroceries = [...this.groceries];
      },
      error: (error) => {
        console.error('Error fetching groceries:', error);
      }
    });
  }
  

  addToCart(item: Item) {
    const foundItem = this.cart.find(i => i.item.id === item.id);
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.cart.push({ item: item, quantity: 1 });
    }
  }
  
  decrementItem(item: Item) {
    const foundCartItem = this.cart.find(cartItem => cartItem.item.id === item.id);
  
    if (foundCartItem) {
      foundCartItem.quantity--;
  
      if (foundCartItem.quantity <= 0) {
        const itemIndex = this.cart.indexOf(foundCartItem);
        if (itemIndex > -1) {
          this.cart.splice(itemIndex, 1);
        }
      }
    }
  
    this.cart = [...this.cart];
  }
  
  incrementItem(item: Item) {
    const foundCartItem = this.cart.find(cartItem => cartItem.item.id === item.id);
  
    if (foundCartItem) {
      foundCartItem.quantity++;
    } else {
      this.cart.push({item: item, quantity: 1});
    }
  
    this.cart = [...this.cart];
  }

  getTotal(): string {
    let total = 0;
    for (let i = 0; i < this.cart.length; i++) {
      total += this.cart[i].item.price * this.cart[i].quantity;
    }
    return total.toFixed(2);
  }

  changeType(type: string) {
    this.selectedType = type;
    if (type === '') {
      this.displayedGroceries = this.groceries;
    } else {
      this.displayedGroceries = this.groceries.filter(grocery => grocery.type === type);
    }
  }
  
}
