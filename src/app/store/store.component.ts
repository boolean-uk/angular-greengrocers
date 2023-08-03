import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Item } from '../models/item';
import { Observable, tap } from 'rxjs';
import { ItemType } from 'src/enums/itemType';
import { SortItem } from 'src/enums/sortItem';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  filtered: ItemType = ItemType.default;
  sorted: SortItem = SortItem.default;
  constructor(public readonly storeService: StoreService) {}

  ngOnInit() {
    this.storeService.fetchAll();
  }

  get items$() {
    if (this.sorted === SortItem.sortedAsc) {
      return this.storeService.items$.pipe(
        tap((x) => x.sort((left, right) => left.price - right.price))
      );
    } else if (this.sorted === SortItem.sortedDesc) {
      return this.storeService.items$.pipe(
        tap((x) => x.sort((left, right) => right.price - left.price))
      );
    } else {
      return this.storeService.items$;
    }
  }

  addItemToCart(item: Item) {
    this.storeService.addToCart(item);
    this.storeService.message$.next(
      this.storeService.getTotalPriceAfterAdding()
    );
  }

  filter() {
    if (this.filtered === ItemType.default) {
      this.storeService.fetchFruits();
      this.filtered = ItemType.fruits;
    } else if (this.filtered === ItemType.fruits) {
      this.storeService.fetchVegetables();
      this.filtered = ItemType.vegetables;
    } else {
      this.storeService.fetchAll();
      this.filtered = ItemType.default;
    }
  }

  sortByPrice() {
    if (this.sorted === SortItem.default || this.sorted === SortItem.sortedDesc) {
      this.sorted = SortItem.sortedAsc;
    } else {
      this.sorted = SortItem.sortedDesc;
    }
  }
}
