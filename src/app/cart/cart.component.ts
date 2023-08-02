import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private readonly storeService: StoreService) {}

  cartItems$ = this.storeService.getCartItems();

  addItem(item: Item): void {
    this.storeService.addToCart(item);
  }

  removeItem(item: Item): void {
    this.storeService.removeItemFromCart(item);
  }
}
