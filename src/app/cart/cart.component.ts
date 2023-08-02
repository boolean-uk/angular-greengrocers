import { Item } from './../models/item';
import { Component } from '@angular/core';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart: {[key: string]: Item[]} = {}

  constructor(private readonly groceryService: GroceryService){
    this.cart = this.groceryService.cart
  }

}
