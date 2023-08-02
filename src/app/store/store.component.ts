import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';
import { Item } from '../models/item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit, OnDestroy {
  filter: string = 'all';
  sorting: string = 'dont';
  store: Item[] = [];
  groceriesServiceSubscription!: Subscription;

  constructor(private readonly groceriesService: GroceriesService) {}

  ngOnInit(): void {
    this.groceriesServiceSubscription = this.groceriesService
      .getGroceries()
      .subscribe((response) => {
        console.log(response);
        this.store = response;
      });
  }

  ngOnDestroy(): void {
    this.groceriesServiceSubscription.unsubscribe();
  }

  filterChanged() {
    let result = this.store.filter((element) => element.type === this.filter);
    if (!result.length) result = this.store;

    if (this.sorting === 'byPrice')
      result = result.sort((a, b) => a.price - b.price);
    else if (this.sorting === 'byName')
      result = result.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

    console.log(result);

    return result;
  }
}
