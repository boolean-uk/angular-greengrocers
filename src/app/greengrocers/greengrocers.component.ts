import { Item } from './../models/item';
import { GroceryService } from './../grocery.service';
import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greengrocers',
  templateUrl: './greengrocers.component.html',
  styleUrls: ['./greengrocers.component.css']
})
export class GreengrocersComponent {

  items: Item[] = []

  constructor(private readonly groceryService: GroceryService){
    this.groceryService.sortGrocers('grocers').then((sortedItems) => {
      this.items = sortedItems;
    });
  }

  addItem(newItem: Item){
    this.groceryService.putToCart(newItem)
    console.log('added to cart', newItem)
  }

  async updateDisplay(option: string) {
    this.items = await this.groceryService.sortGrocers(option)
  }

}
