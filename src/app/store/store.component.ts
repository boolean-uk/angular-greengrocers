import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Item } from '../models/item';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})
export class StoreComponent implements OnInit {
  storeItemList$!: Observable<Item[]>;
  allItemTypes$!: Observable<string[]>;
  selectedType$ = new BehaviorSubject<string | null>('All items');

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeItemList$ = this.storeService.storeItemList$;
    this.allItemTypes$ = this.storeItemList$.pipe(
      map((items) =>
        ['All items'].concat(
          items
            .map((item) => item.type)
            .filter((type, index, self) => self.indexOf(type) === index)
        )
      )
    );

    this.selectedType$
      .pipe(distinctUntilChanged())
      .subscribe((value) =>
        this.storeService.filterByType(value === 'All items' ? null : value)
      );
  }

  filterByType(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    this.selectedType$.next(value);
  }

  sortByName() {
    this.storeService.sortByName();
  }

  sortByPrice() {
    this.storeService.sortByPrice();
  }
}
