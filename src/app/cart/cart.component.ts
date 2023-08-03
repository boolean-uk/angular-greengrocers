import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems$: [Item, number][] = [];

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService
      .getCartItems()
      .subscribe((items) => (this.cartItems$ = Array.from(items)));
  }
}
