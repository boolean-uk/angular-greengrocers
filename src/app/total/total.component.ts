import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent implements OnInit {
  cartItems$: Map<Item, number> = new Map<Item, number>();
  total$: number = 0;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems$ = items;
      this.total$ = this.calculateTotal();
    });
  }
  calculateTotal(): number {
    let total = 0;

    this.cartItems$.forEach((quantity, item) => {
      total += item.price * quantity;
    });

    return total;
  }
}
