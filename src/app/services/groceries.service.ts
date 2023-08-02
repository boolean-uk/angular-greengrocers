import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  private url = `${env.apiUrl}`;
  private groceries$ = this.http.get<Item[]>(this.url);

  constructor(private readonly http: HttpClient) {}

  getAllGroceries(): Observable<Item[]> {
    return this.groceries$;
  }

  get groceries() {
    return this.groceries$;
  }
}
