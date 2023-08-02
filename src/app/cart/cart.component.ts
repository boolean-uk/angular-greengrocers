import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private readonly groceriesService: GroceriesService) {}

  ngOnInit(): void {
    this.cartItems = this.groceriesService.getCart();
  }
}
