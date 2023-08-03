import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { GroceriesService } from '../services/groceries.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  items: Item[] | null = null
  shouldShowFruits = false
  copyOfItems: Item[] | null = null 

  constructor(private readonly groceriesService: GroceriesService) {}
  
  async ngOnInit() {
    this.items = await this.groceriesService.getItemsArray()
    this.copyOfItems = this.items
  }

  addToCart(item: Item) {
    this.groceriesService.addItemToCart(item)
  }

  sortItemsByPrice() {
    if(this.items !== null) {
      this.items = this.items.sort((a, b) => a.price - b.price)
    }
  }

  sortItemsByName() {
    if(this.items !== null) {
      this.items = this.items.sort((a, b) => a.name.localeCompare(b.name))
    }
  }

  filterByType() {
    this.shouldShowFruits = !this.shouldShowFruits
    this.items = this.copyOfItems

    let type = ''
    if ( this.shouldShowFruits ) { type = 'fruit'} 
    else { type = 'vegetable' }
    
    if(this.items !== null) {
      this.items = this.items.filter((item) => item.type === type)
    }
  }

}
