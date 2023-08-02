import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Groceries, GroceryType} from "../models/groceries";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  groceries$: Observable<Groceries[]> | null = null
  filteredGroceries$: Observable<Groceries[]> | null = null

  nameAscendingOrder: boolean = true
  priceAscendingOrder: boolean = true

  selectedTypes: Set<GroceryType> = new Set<GroceryType>([GroceryType.fruit, GroceryType.vegetable]);
  private readonly API_URL: string = environment.apiUrl + "groceries"


  constructor(private readonly http: HttpClient) {
    this.loadGroceries()
  }

  loadGroceries() {
    this.groceries$ = this.http.get<Groceries[]>(this.API_URL)
    this.filteredGroceries$ = this.groceries$
  }

  sortGroceriesByProperty(property: keyof Groceries, ascending: boolean = true): Observable<Groceries[]> {
    return this.groceries$ = this.filteredGroceries$!.pipe(tap((items: Groceries[]) => {
      items.sort((it1: Groceries, it2: Groceries): number => {
        const comparison = it1[property] > it2[property] ? 1 : -1;
        return ascending ? comparison : -comparison;
      });
    }));
  }

  sortByName(): Observable<Groceries[]> {
    const sorted: Observable<Groceries[]> = this.sortGroceriesByProperty('name', this.nameAscendingOrder);
    this.nameAscendingOrder = !this.nameAscendingOrder
    return sorted
  }

  sortByPrice(): Observable<Groceries[]> {
    const sorted: Observable<Groceries[]> = this.sortGroceriesByProperty('price', this.priceAscendingOrder);
    this.priceAscendingOrder = !this.priceAscendingOrder
    return sorted
  }


  filterByType(type: GroceryType): Observable<Groceries[]> {
    if (this.selectedTypes.has(type)) {
      this.selectedTypes.delete(type);
    } else {
      this.selectedTypes.add(type);
    }

    return this.filteredGroceries$ = this.groceries$!.pipe(map((groceries: Groceries[]) => groceries.filter((grocery: Groceries) => this.selectedTypes.has(grocery.type))));

  }
}
