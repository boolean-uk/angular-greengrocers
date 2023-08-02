import { Item } from '../models/item';
import { GroceryService } from './../grocery.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-greengrocers',
  templateUrl: './greengrocers.component.html',
  styleUrls: ['./greengrocers.component.css']
})
export class GreengrocersComponent {

  constructor(private readonly groceryService: GroceryService){}

  items = this.groceryService.getGrocers()

  addItem(newItem: Item){
    this.groceryService.putToCart(newItem)
    console.log('added to cart', newItem)
    console.log('my cart', this.groceryService.cart)
  }

}
