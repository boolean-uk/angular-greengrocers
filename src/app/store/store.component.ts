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
    if(!this.storeService.hasOwnProperty(item.name)){
      this.storeService.itemsInCart[item.name] = 0;
    }
    this.storeService.itemsInCart[item.name]++
    this.storeService.total += item.price
  }

  refreshStore() {
     this.items = this.storeService.items
  }

  async sortItemsByPrice() {
    (await this.items).sort((a, b) => a.price - b.price);
  }

  async sortItemsByName(){
    (await this.items).sort((a, b) => a.name.localeCompare(b.name));
  }

  showVegetables() {
    this.items = this.storeService.showVegetables()
  }

  showFruits() {
    this.items = this.storeService.showFruits()
  }
}
