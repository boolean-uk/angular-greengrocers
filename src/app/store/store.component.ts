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

  items: Promise<Item[]> = this.storeService.items


  addToCart(item: Item) {
    this.cartService.addItemToCart(item)
  }

  async sortItemsByPrice() {
    try {
      const items: Item[] = await this.items;
      items.sort((a, b) => a.price - b.price);
      console.log(items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

  async sortItemsByName() {
    try {
      const items: Item[] = await this.items;
      items.sort((a, b) => a.name.localeCompare(b.name));
      console.log(items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }
}
