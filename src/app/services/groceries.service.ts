import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Groceries, GroceryType} from "../models/groceries";
import {map, Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  private readonly API_URL: string = environment.apiUrl + "groceries"

  groceries$: Observable<Groceries[]> = this.http.get<Groceries[]>(this.API_URL).pipe(shareReplay(1))
  filteredGroceries$: Observable<Groceries[]> = this.groceries$

  nameAscendingOrder: boolean = true

  priceAscendingOrder: boolean = true
  selectedTypes: Set<GroceryType> = new Set<GroceryType>([GroceryType.fruit, GroceryType.vegetable]);


  constructor(private readonly http: HttpClient) {
  }

  sortGroceriesByProperty(property: keyof Groceries, ascending: boolean = true): Observable<Groceries[]> {
    return this.filteredGroceries$!.pipe(map((items: Groceries[]) => {
      return items.sort((it1: Groceries, it2: Groceries): number => {
        const comparison = it1[property] > it2[property] ? 1 : -1;
        return ascending ? comparison : -comparison;
      });
    }));
  }

  sortByName() {
    const sorted: Observable<Groceries[]> = this.sortGroceriesByProperty('name', this.nameAscendingOrder);
    this.nameAscendingOrder = !this.nameAscendingOrder
    this.filteredGroceries$ = sorted
  }

  sortByPrice() {
    const sorted: Observable<Groceries[]> = this.sortGroceriesByProperty('price', this.priceAscendingOrder);
    this.priceAscendingOrder = !this.priceAscendingOrder
    this.filteredGroceries$ = sorted
  }


  filterByType(type: GroceryType){
    if (this.selectedTypes.has(type)) {
      this.selectedTypes.delete(type);
    } else {
      this.selectedTypes.add(type);
    }

    this.filteredGroceries$ = this.groceries$!.pipe(map((groceries: Groceries[]) => groceries.filter((grocery: Groceries) => this.selectedTypes.has(grocery.type))));

  }
}
