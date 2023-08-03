import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item';

type SortOrder = 'asc' | 'desc';

interface SortInfo {
  by: string;
  order: SortOrder;
}

@Injectable({
  providedIn: 'root',
})
export class SortAndFilterService {
  private filterByTypeSubject = new BehaviorSubject<string | null>(null);
  private sortSubject = new BehaviorSubject<SortInfo>({ by: '', order: 'asc' });

  filterByType$ = this.filterByTypeSubject.asObservable();
  sort$ = this.sortSubject.asObservable();

  filterByType(type: string | null) {
    this.filterByTypeSubject.next(type);
  }

  sortByName() {
    this.toggleSort('name');
  }

  sortByPrice() {
    this.toggleSort('price');
  }

  private toggleSort(by: string) {
    const currentSort = this.sortSubject.getValue();
    this.sortSubject.next({
      by,
      order:
        currentSort.by === by && currentSort.order === 'asc' ? 'desc' : 'asc',
    });
  }

  filterAndSortItems$ = (items$: Observable<Item[]>) =>
    combineLatest([items$, this.filterByType$, this.sort$]).pipe(
      map(([items, filterType, sort]) =>
        this.filterAndSortItems(items, filterType, sort)
      )
    );

  private filterAndSortItems(
    items: Item[],
    filterType: string | null,
    sort: SortInfo
  ) {
    let result = items;
    if (filterType) {
      result = result.filter((item) => item.type === filterType);
    }

    if (sort.by === 'name') {
      result = this.sortItemsByName(result, sort.order);
    } else if (sort.by === 'price') {
      result = this.sortItemsByPrice(result, sort.order);
    }

    return result;
  }

  private sortItemsByName(items: Item[], order: SortOrder) {
    return items.sort((a, b) =>
      order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }

  private sortItemsByPrice(items: Item[], order: SortOrder) {
    return items.sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
  }
}
