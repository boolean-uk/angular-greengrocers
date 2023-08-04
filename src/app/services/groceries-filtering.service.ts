import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { GroceriesService } from './groceries.service';
import { ProductType } from '../models/productType';

@Injectable({
  providedIn: 'root',
})
export class GroceriesFilteringService {
  private readonly filterType$ = new BehaviorSubject(ProductType.ALL);

  constructor(private readonly groceriesService: GroceriesService) {}

  get groceries$() {
    return combineLatest([
      this.groceriesService.groceries,
      this.filterType$,
    ]).pipe(
      map(([groceries, filterType]) =>
        filterType === ProductType.ALL
          ? groceries
          : groceries.filter((g) => g.type === filterType)
      )
    );
  }

  onTypeChange(type: ProductType): void {
    let filter = type;
    this.filterType$.next(filter);
    console.log(this.filterType$.value);
  }
}
