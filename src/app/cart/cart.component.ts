import { Component, OnInit } from '@angular/core';
import { GrocersService } from 'src/grocers.service';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: CartItem[] = [];

  constructor(private readonly grocersService: GrocersService) {}

  ngOnInit(): void {
    this.cartItems = this.grocersService.getCart();
  }
}