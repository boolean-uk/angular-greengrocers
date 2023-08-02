import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems$ = this.cartService.cartItems$;
  totalPrice$ = this.cartService.totalPrice$;
  
  constructor(private readonly cartService: CartService) { }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }
}
