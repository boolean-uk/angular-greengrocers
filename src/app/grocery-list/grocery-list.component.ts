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
  isFruit: boolean = false
  isVegetable: boolean = false

  addToCart(grocery: Item) {
    if(this.groceryService.groceryCart.has(grocery)) {
      // @ts-ignore
      this.groceryService.groceryCart.set(grocery, this.groceryService.groceryCart.get(grocery)+1)
      return
    }
    this.groceryService.groceryCart.set(grocery, 1)
  }

  toggleFruit() {
    if(this.isFruit) {
      this.groceries = this.groceryService.getFruit()
      const a = document.getElementById('vegetables')
      // @ts-ignore
      a.checked = false
      return
    }
    this.groceries = this.groceryService.getGrocery()
  }

  toggleVegetable() {
    if(this.isVegetable) {
      this.groceries = this.groceryService.getVegetable()
      const a = document.getElementById('fruits')
      // @ts-ignore
      a.checked = false
      return
    }
    this.groceries = this.groceryService.getGrocery()
  }

  async sortName() {
    const sorted = await this.groceries
    sorted.sort((a: any, b: any) => a.name.localeCompare(b.name));
  }

  async sortPrice() {
    const sorted = await this.groceries
    sorted.sort((a: any, b: any) => a.price-b.price);
  }

}
