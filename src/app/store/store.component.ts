import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Item } from '../models/item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit, OnDestroy {
  constructor(private readonly storeService: StoreService) {}

  items?: Item[];
  subs: Subscription[] = [];
  onlyVeggies: boolean = false;
  onlyFruits: boolean = false;
  sortBy: string = '';

  ngOnInit(): void {
    const sub = this.storeService
      .getItems()
      .subscribe((items) => (this.items = items));
    this.subs.push(sub);
  }

  addItemToCart(item: Item): void {
    this.storeService.addToCart(item);
  }

  get filteredItems() {
    if (this.onlyVeggies && !this.onlyFruits) {
      return this.items?.filter((item) => item.type === 'vegetable');
    } else if (this.onlyFruits && !this.onlyVeggies) {
      return this.items?.filter((item) => item.type === 'fruit');
    }

    return this.items;
  }

  toggleSort(option: string) {
    if (this.sortBy === option) {
      this.sortBy = '';
    } else {
      this.sortBy = option;
      this.sortItems();
    }
  }

  toggleShow(option: string) {
    if (option === 'veggies') {
      this.onlyVeggies = !this.onlyVeggies;
      this.onlyFruits = false;
    } else if (option === 'fruits') {
      this.onlyFruits = !this.onlyFruits;
      this.onlyVeggies = false;
    }
  }

  sortItems() {
    switch (this.sortBy) {
      case 'price':
        this.items?.sort((a, b) => a.price - b.price);
        break;
      case 'name':
        this.items?.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        this.items?.sort((a, b) => a.id.localeCompare(b.id));
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
