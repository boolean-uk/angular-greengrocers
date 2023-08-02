import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Map<Item, number> = new Map();

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.updateCart();
  }

  updateCart() {
    this.cartItems = this.itemService.getCartItems();
  }

  incrementItem(item: Item) {
    this.itemService.addToCart(item, 1);
    this.updateCart();
  }

  decrementItem(item: Item) {
    this.itemService.deleteFromCart(item, 1);
    this.updateCart();
  }

  removeItem(item: Item) {
    this.itemService.deleteFromCart(item);
    this.updateCart();
  }
}

