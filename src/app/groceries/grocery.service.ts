import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private groceriesRefresh$ = new BehaviorSubject<void>(undefined)
  public groceries$ = this.groceriesRefresh$.pipe(
    switchMap(() => this.http.get<Item[]>(`${environment.apiUrl}groceries`) )
  )



  constructor(private readonly http: HttpClient) { }
}

