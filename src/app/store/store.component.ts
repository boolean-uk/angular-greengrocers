import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  constructor(private groceriesService: GroceriesService) {}

  items: Item[] = [];

  ngOnInit(): void {
    this.groceriesService
      .getAllGroceries()
      .subscribe((groceries: Item[]) => (this.items = groceries));
  }

  addToCart(item: Item) {
    this.groceriesService.addToCart(item);
  }
}
