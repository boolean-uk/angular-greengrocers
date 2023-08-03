import { Component } from '@angular/core';
import {GroceriesService} from "./groceries.service";
import {Item} from "./models/item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-green-grocers';

  groceriesAvailable: Item[] = this.groceryService.groceriesAvailable
  cart: Map<Item, number> = this.groceryService.cart
  totalPrice: number = this.groceryService.totalPrice;

  constructor(private readonly groceryService: GroceriesService) {}

  addToCart(item: Item) {
    this.groceryService.addToCart(item);
    this.totalPrice = this.groceryService.totalPrice;
  }

  incrementQuantity(item: Item) {
    this.groceryService.incrementQuantity(item);
    this.totalPrice = this.groceryService.totalPrice;
  }

  decrementQuantity(item: Item) {
    this.groceryService.decrementQuantity(item);
    this.totalPrice = this.groceryService.totalPrice;
  }

}
