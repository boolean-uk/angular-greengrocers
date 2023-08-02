import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  items: Item[] | null = null

  constructor(private readonly groceriesService: GroceriesService) {}
  
  async ngOnInit() {
    this.items = await this.groceriesService.getItemsArray()
  }

  addToCart(item: Item) {
    this.groceriesService.addItemToCart(item)
  }

}
