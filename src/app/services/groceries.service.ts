import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Groceries} from "../models/groceries";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  groceries$: Observable<Groceries[]> | null = null
  private readonly API_URL: string = environment.apiUrl + "groceries"

  constructor(private readonly http: HttpClient) {
    this.loadGroceries()
  }

  loadGroceries() {
    this.groceries$ = this.http.get<Groceries[]>(this.API_URL)
  }

  sortGroceriesByProperty(property: keyof Groceries, ascending: boolean = true): Observable<Groceries[]> {
    return this.groceries$ = this.groceries$!.pipe(tap((items: Groceries[]) => {
      items.sort((it1: Groceries, it2: Groceries): number => {
        const comparison = it1[property] > it2[property] ? 1 : -1;
        return ascending ? comparison : -comparison;
      });
    }));
  }

  sortByName(ascending: boolean): Observable<Groceries[]> {
    return this.sortGroceriesByProperty('name', ascending);
  }

  sortByPrice(ascending: boolean): Observable<Groceries[]> {
    return this.sortGroceriesByProperty('price', ascending);
  }


}
