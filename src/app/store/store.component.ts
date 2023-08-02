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

  itemsChanged: Item[] = [];
  items = this.storeService.items;
  

  addToCart(item: Item) {
    this.storeService.itemsInCart[item.name]++
    this.storeService.total += item.price
  }

  refreshStore() {
     this.itemsChanged = this.storeService.itemsList
  }

  sortItemsByPrice() {
    this.storeService.sortItemsByPrice()
    this.refreshStore()
  }

  sortItemsByName() {
    this.storeService.sortItemsByName()
    this.refreshStore()
  }

  showVegetables() {

  }

  showFruits() {

  }
}
