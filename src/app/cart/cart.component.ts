import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems$: [Item, number][] = []; // Observable of array of [Item, quantity] pairs

  constructor(private readonly cartService: CartService) {
    this.cartService
      .getCartItems()
      .subscribe((items) => (this.cartItems$ = Array.from(items)));
  }

  ngOnInit(): void {
    // You can call other initialization methods here if needed
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
