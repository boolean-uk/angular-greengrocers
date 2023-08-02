import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  private refresh$ = new BehaviorSubject<void>(undefined);
  private update$ = new Subject<Item>();
  private url = `${env.apiUrl}`;
  private groceries$ = this.refresh$.pipe(
    switchMap(() => this.http.get<Item[]>(this.url))
  );

  constructor(private readonly http: HttpClient) {}

  getAllGroceries(): Observable<Item[]> {
    return this.groceries$;
  }
}
