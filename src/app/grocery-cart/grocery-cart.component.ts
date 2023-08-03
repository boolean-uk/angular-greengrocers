import { Component } from '@angular/core';
import {GroceryService} from "../services/grocery.service";
import {Item} from "../models/item";

@Component({
  selector: 'app-grocery-cart',
  templateUrl: './grocery-cart.component.html',
  styleUrls: ['./grocery-cart.component.css']
})
export class GroceryCartComponent {

  constructor(private groceryService: GroceryService) {}

  cart = this.groceryService.groceryCart

  moreItems(item: Item) {
    const currentQuantity = this.cart.get(item) || 0;
    this.cart.set(item, currentQuantity+1);
  }

  lessItems(item: Item) {
    const currentQuantity = this.cart.get(item) || 0;
    if(currentQuantity>1) {
      this.cart.set(item, currentQuantity - 1);
      return;
    }
    this.cart.delete(item)
  }
}
