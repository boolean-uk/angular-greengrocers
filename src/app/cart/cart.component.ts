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

  minusItem(item: Item){
    this.groceryService.removeFromCart(item)
    console.log("item deleted", this.cart)
  }

  plusItem(item: Item){
    this.groceryService.putToCart(item)
    console.log("item added", this.cart)
  }

}
