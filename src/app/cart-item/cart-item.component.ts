import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input('cartItem') cartItem?: [Item, number];

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {}
}
