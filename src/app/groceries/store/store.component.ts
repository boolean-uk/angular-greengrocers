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
  priceAscending = true;
  nameAscending = true;
  groceries: Item[] | null = null;

  constructor(private readonly groceriesService: GroceriesService) {}

  async ngOnInit(): Promise<void> {
    await this.getGroceries();
  }

  async getGroceries() {
    this.groceries = await this.groceriesService.getGroceriesByType(this.type);
  }

  toggleTypeFilter(): void {
    switch (this.type) {
      case null:
        this.type = ItemType.fruit;
        break;
      case ItemType.fruit:
        this.type = ItemType.vegetable;
        break;
      case ItemType.vegetable:
        this.type = null;
        break;
    }
    this.getGroceries();
  }

  getTypeButtonText(): string {
    switch (this.type) {
      case null:
        return 'Show Fruits';
      case ItemType.fruit:
        return 'Show Vegetables';
      case ItemType.vegetable:
        return 'Show All';
    }
  }

  togglePriceSort(): void {
    this.sortBy(this.priceAscending, (a, b) => a.price - b.price);
    this.priceAscending = !this.priceAscending;
  }

  toggleNameSort(): void {
    this.sortBy(this.nameAscending, (a, b) => a.name.localeCompare(b.name));
    this.nameAscending = !this.nameAscending;
  }

  private sortBy(
    ascending: boolean,
    compareFn: (a: Item, b: Item) => number
  ): void {
    if (!this.groceries) return;

    const sorted = [...this.groceries].sort(compareFn);
    if (!ascending) {
      sorted.reverse();
    }

    this.groceries = sorted;
  }
}
