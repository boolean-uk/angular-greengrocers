import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  
  constructor(private readonly storeService: StoreService, private readonly cartService: CartService) {}

  items = this.storeService.items

  addToCart(item: Item) {
    this.cartService.addItemToCart(item)
  }
}
