import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GroceryService} from "../services/grocery.service";
import {Item} from "../models/item";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {

  constructor(private readonly groceryService: GroceryService) {
  }

  groceries = this.groceryService.getGrocery()

  addToCart(grocery: Item) {
    if(this.groceryService.groceryCart.has(grocery)) {
      // @ts-ignore
      this.groceryService.groceryCart.set(grocery, this.groceryService.groceryCart.get(grocery)+1)
      return
    }
    this.groceryService.groceryCart.set(grocery, 1)
  }

}
