import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Vegetable} from "../models/vegetable";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  groceries$: Observable<Vegetable[]> | null = null
  private readonly API_URL: string = environment.apiUrl + "groceries"

  constructor(private readonly http: HttpClient) {
    this.loadGroceries()
  }

  loadGroceries() {
    this.groceries$ = this.http.get<Vegetable[]>(this.API_URL)
  }

  sortGroceriesByProperty(property: keyof Vegetable, ascending: boolean = true): Observable<Vegetable[]> {
    return this.groceries$ = this.groceries$!.pipe(tap((items: Vegetable[]) => {
      items.sort((it1: Vegetable, it2: Vegetable): number => {

        const comparison = it1[property] > it2[property] ? 1 : -1;
        return ascending ? comparison : -comparison;
      });
    }));
  }

  sortByName(ascending: boolean): Observable<Vegetable[]> {
    return this.sortGroceriesByProperty('name', ascending);
  }

  sortByPrice(ascending: boolean): Observable<Vegetable[]> {
    return this.sortGroceriesByProperty('price', ascending);
  }
}
