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

  ngOnInit(): void {
    const sub = this.storeService
      .getItems()
      .subscribe((items) => (this.items = items));
    this.subs.push(sub);
  }

  addItemToCart(item: Item): void {
    this.storeService.addToCart(item);
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
