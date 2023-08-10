import { Component, OnInit, Output } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item, ItemType } from '../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.css']
})

export class StoreComponent implements OnInit {
  items: any
  sort: string = 'name'
  filterType: ItemType | null = null;


  constructor(private readonly itemsService: ItemsService) { }

  async ngOnInit() {
    this.items = await this.itemsService.getAllItems();
  }
  
  addItem(item: Item): void {
    this.itemsService.addItem(item);
  }

  changeSort(filter: string){
    this.sort=filter
  }
  
  toggleChangeSortType(){
    this.sort = this.sort === 'name' ? 'weight' : 'name';
  }

  async toggleFilterByType(): Promise<void> {
    if (this.filterType === null) {
      this.filterType = ItemType.Tshirt;
    } else if (this.filterType === ItemType.Outwear) {
      this.filterType = ItemType.Outwear;
    } else {
      this.filterType = null;
    }
    await this.getFilteredItems();
  }

  async getFilteredItems() {
    this.items = await this.itemsService.getItemsByType(this.filterType);
  }

}
