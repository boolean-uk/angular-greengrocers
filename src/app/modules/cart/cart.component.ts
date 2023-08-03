import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import {Product} from "../../models/item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(product: Product): void {
    this.cartService.addToCart(product);
    this.getCartItems();
  }

  decreaseQuantity(product: Product): void {
    this.cartService.removeFromCart(product);
    this.getCartItems();
  }
}
