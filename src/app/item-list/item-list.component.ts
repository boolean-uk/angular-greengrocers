import {Component, OnInit} from '@angular/core';
import {ItemService} from "../services/item.service";
import {Item} from "../models/item";
import {Subscription} from "rxjs";
import {IconLoaderService} from "../services/icon-loader.service";
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit{
  items: Item[] = [];
  private itemSubscription!: Subscription;
  iconNames: string[] = [];
  selectedFilter: string = 'all';
  selectedSort: string = 'name';

  constructor(private itemService: ItemService, private iconLoaderService: IconLoaderService) {}

  ngOnInit() {
    this.loadItemsAndIcons();
  }

  private async loadItemsAndIcons() {
    await this.handleSortingFiltering()
    console.log(this.items);
    const iconNames = this.items.map((obj) => obj.id);
    this.iconLoaderService.registerIcons(iconNames);
  }

  addToCart(item: Item, count: number){
    this.itemService.addToCart(item, count);
  }

  async handleSortingFiltering(){
    await this.filterItemsByType();
    this.sortItems();
  }

  private async filterItemsByType() {
    if (this.selectedFilter === 'all') {
      this.items = await this.itemService.getItems();
    } else {
      this.items = await this.itemService.getItemsByType(this.selectedFilter);
    }
  }

  private sortItems() {
    if (this.selectedSort === 'name') {
      this.items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSort === 'price') {
      this.items.sort((a, b) => a.price - b.price);
    }
  }

}
