import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { GroceriesService } from '../groceries.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  constructor(private groceriesService: GroceriesService) {}

  items: Item[] = [];
  itemsToShow: Item[] = [];
  selectedFilterOption: string = 'empty';
  selectedSortOption: string = 'empty';

  ngOnInit(): void {
    this.groceriesService.getAllGroceries().subscribe((groceries: Item[]) => {
      this.items = groceries;
      this.itemsToShow = JSON.parse(JSON.stringify(this.items));
    });
  }

  addToCart(item: Item) {
    this.groceriesService.addToCart(item);
  }

  onSortChange() {
    if (this.selectedFilterOption == 'empty')
      this.itemsToShow = JSON.parse(JSON.stringify(this.items));

    if (this.selectedSortOption == 'price') {
      this.itemsToShow.sort((item1, item2) => item1.price - item2.price);
    } else if (this.selectedSortOption == 'name') {
      this.itemsToShow.sort((item1, item2) =>
        item1.name.localeCompare(item2.name)
      );
    }
  }

  onFilterChange() {
    if (this.selectedFilterOption !== 'empty') {
      this.itemsToShow = this.items.filter(
        (item) => item.type == this.selectedFilterOption
      );
    } else this.itemsToShow = JSON.parse(JSON.stringify(this.items));
  }
}
