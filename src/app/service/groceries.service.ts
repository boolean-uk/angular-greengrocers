import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GroceriesService {

  constructor(private readonly http: HttpClient) { }

  refreshItems$ = new BehaviorSubject<void>(undefined);
  
  getItems(): Observable<Item[]> {
    return this.refreshItems$.pipe(
      switchMap(() => this.http.get<Item[]>(`${environment.apiUrl}groceries`)
    ));
  }

}
