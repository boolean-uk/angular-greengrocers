import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, firstValueFrom, switchMap, tap } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class GrocerService {
  private grocerId = 1;
    constructor(private readonly http: HttpClient) {
      this.blaSubject.next('apple');
    }
  
    blaSubject = new Subject();
  
    refreshFruit$ = new BehaviorSubject<string>('');
    fruit$ = this.refreshFruit$.pipe(
      tap((value) => console.log('subject: ', value)),
      switchMap((_value) =>
        this.http.get<Item[]>('https://boolean-api-server.fly.dev/groceries')
      )
    );
  
    getFruit() {
      return this.http.get<Item[]>(
        'https://boolean-api-server.fly.dev/groceries'
      );
    }
  }
  
  interface Fruit {
    name: string;
  }