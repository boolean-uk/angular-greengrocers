import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { Item, ItemType } from 'src/app/models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  type: ItemType | null = null;

  constructor(private readonly groceriesService: GroceriesService) {}

  groceries: Item[] | null = null;

  async ngOnInit(): Promise<void> {
    await this.getGroceries();
  }

  async getGroceries() {
    this.groceries = await this.groceriesService.getGroceriesByType(this.type);
  }

  async filterByType(): Promise<void> {
    if (this.type === null) {
      this.type = ItemType.fruit;
    } else if (this.type === ItemType.fruit) {
      this.type = ItemType.vegetable;
    } else {
      this.type = null;
    }
    await this.getGroceries();
  }
}
