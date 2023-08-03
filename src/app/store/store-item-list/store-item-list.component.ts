import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Item } from '../../models/item';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-item-list',
  templateUrl: './store-item-list.component.html',
})
export class StoreItemListComponent implements OnInit, OnDestroy {
  @Input() items!: Item[] | null;
  storeItemList: Item[] = [];
  private onDestroy = new Subject<void>();

  constructor(private readonly storeService: StoreService) {}

  ngOnInit() {
    this.storeService.storeItemList$
      .pipe(takeUntil(this.onDestroy))
      .subscribe((items) => (this.storeItemList = items));
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
