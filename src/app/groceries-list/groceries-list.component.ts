import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item';
import { GroceriesFilteringService } from '../services/groceries-filtering.service';
import { SortDirection } from '../sort-by-price/sort-by-price.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'],
})
export class GroceriesListComponent implements OnInit {
  @Input() sortDirection: SortDirection = SortDirection.ASC;
  groceriesRefresh$ = new BehaviorSubject<Item[]>([]);
  groceries$: Observable<Item[]> = this.groceriesRefresh$.asObservable();

  constructor(
    private readonly groceriesFilteringService: GroceriesFilteringService
  ) {}

  ngOnInit(): void {
    this.updateGroceries();
  }

  ngOnChanges(): void {
    this.sortGroceries();
  }

  sortGroceries(): void {
    this.groceries$ = this.sortGroceriesByPrice(this.sortDirection);
  }

  sortGroceriesByPrice(sortDirection: SortDirection): Observable<Item[]> {
    return this.groceries$.pipe(
      map((groceries) => {
        return groceries.slice().sort((a, b) => {
          const comparison = sortDirection === SortDirection.ASC ? 1 : -1;
          return (a.price - b.price) * comparison;
        });
      })
    );
  }

  private updateGroceries() {
    this.groceriesFilteringService.groceries$.subscribe((grocery) => {
      this.groceriesRefresh$.next(grocery);
    });
  }
}
