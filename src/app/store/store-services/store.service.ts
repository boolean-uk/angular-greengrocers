import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { Item } from '../../models/item';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _storeItemList = new BehaviorSubject<Item[]>([]);

  constructor(private http: HttpClient) {
    this.http
      .get<Item[]>(environment.apiUrl)
      .pipe(
        catchError((error) => {
          console.error('Error occurred:', error);
          return of([]);
        })
      )
      .subscribe((items) => this._storeItemList.next(items));
  }

  get storeItemList$() {
    return this._storeItemList.asObservable();
  }
}
