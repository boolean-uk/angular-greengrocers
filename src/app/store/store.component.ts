import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent {
  constructor(private readonly storeService: StoreService) {}

  items = this.storeService.items;

  addToCart(item: Item) {
    this.storeService.itemsInCart.push(item)
    console.log(this.storeService.itemsInCart)
  }
}
