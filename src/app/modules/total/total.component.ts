import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
})
export class TotalComponent implements OnInit, OnDestroy {
  cartItems: Product[] = [];
  totalPrice: number = 0;
  // @ts-ignore
  private cartItemsSubscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItemsSubscription = this.cartService.getCartItems$().subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.calculateTotalPrice();
    });
  }

  ngOnDestroy() {
    this.cartItemsSubscription.unsubscribe();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
