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
  store: Item[] = [];
  groceriesServiceSubscription!: Subscription;

  constructor(private readonly groceriesService: GroceriesService) {}

  ngOnInit(): void {
    this.groceriesService.getGroceries().subscribe((response) => {
      console.log(response);
      this.store = response;
    });
  }

  ngOnDestroy(): void {
    this.groceriesServiceSubscription.unsubscribe();
  }
}
