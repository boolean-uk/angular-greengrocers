import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private readonly cartService: CartService) {}

  cartItems = this.cartService.cart
  itemsInCart = this.cartService.cart.keys()

  addOneElementToCart(item: Item) {
    this.cartService.addOneElementToCart(item)
  }
  removeOneElementFromCart(item: Item) {
    this.cartService.removeOneElementFromCart(item)
  }
}
