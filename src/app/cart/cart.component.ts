import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private groceriesService: GroceriesService) {}

  cart!: CartItem[];

  ngOnInit(): void {
    this.cart = this.groceriesService.getCart();
  }

  increaseQuantity(cartItem: CartItem) {
    this.groceriesService.increaseQuantity(cartItem);
  }

  decreaseQuantity(cartItem: CartItem) {
    this.groceriesService.decreaseQuantity(cartItem);
  }
}
