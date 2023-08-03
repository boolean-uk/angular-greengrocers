import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private storeItemListSubject = new BehaviorSubject<Item[]>([]);
  private addToCartSubject = new Subject<Item>();
  private filterByTypeSubject = new BehaviorSubject<string | null>(null);
  private sortSubject = new BehaviorSubject<{
    by: string;
    order: 'asc' | 'desc';
  }>({ by: '', order: 'asc' });

  addToCartEvent$ = this.addToCartSubject.asObservable();
  filterByType$ = this.filterByTypeSubject.asObservable();
  sort$ = this.sortSubject.asObservable();

  storeItemList$: Observable<Item[]>;

  constructor(private http: HttpClient) {
    this.http
      .get<Item[]>(environment.apiUrl)
      .pipe(
        catchError((error) => {
          console.error('Error occurred:', error);
          return of([]);
        })
      )
      .subscribe((items) => this.storeItemListSubject.next(items));

    this.storeItemList$ = combineLatest([
      this.storeItemListSubject.asObservable(),
      this.filterByType$,
      this.sort$,
    ]).pipe(
      map(([items, filterType, sort]) =>
        this.filterAndSortItems(items, filterType, sort)
      )
    );
  }

  addToCart(item: Item) {
    this.addToCartSubject.next(item);
  }

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

  private filterAndSortItems(
    items: Item[],
    filterType: string | null,
    sort: { by: string; order: 'asc' | 'desc' }
  ) {
    let result = [...items];
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

  private sortItemsByName(items: Item[], order: 'asc' | 'desc') {
    return items.sort((a, b) =>
      order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }

  private sortItemsByPrice(items: Item[], order: 'asc' | 'desc') {
    return items.sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
  }
}
