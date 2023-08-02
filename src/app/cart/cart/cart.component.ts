import { Component, OnInit } from '@angular/core';
import { CartServiceService, ItemInCart } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: ItemInCart[] = [];
  total = 0

  constructor(private readonly cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
    this.cartService.totalPrice$.subscribe((total) => {
      this.total = total
    })
  }

}
