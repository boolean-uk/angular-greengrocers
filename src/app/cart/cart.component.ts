
import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../service/grocery.service';
import { CartItem } from '../models/cartItem';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];

  constructor(private readonly groceryService : GroceryService) {} 

  async ngOnInit() {
    this.cart = this.groceryService.getCart();
  }

  increase(item: CartItem) {
    this.groceryService.increaseQuantity(item);
  }
  decrease(item: CartItem) {
    this.groceryService.decreaseQuantity(item);
  }
}