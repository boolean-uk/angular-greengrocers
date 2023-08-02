import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private storeItemListSubject = new BehaviorSubject<Item[]>([]);
  storeItemList$ = this.storeItemListSubject.asObservable();

  private addToCartSubject = new Subject<Item>();
  addToCartEvent$ = this.addToCartSubject.asObservable();

  constructor(private http: HttpClient) {
    this.http
      .get<Item[]>(environment.apiUrl)
      .pipe(
        catchError((error) => {
          console.error('Error occurred:', error);
          return of([]);
        })
      )
      .subscribe((items) => this.storeItemListSubject.next(items));
  }

  addToCart(item: Item) {
    this.addToCartSubject.next(item);
  }
}
