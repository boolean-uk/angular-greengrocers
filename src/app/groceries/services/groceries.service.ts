import { Observable, firstValueFrom, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type Item } from '../models/item';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  private readonly apiURL = environment.apiUrl;
  private items$: Observable<Item[]> | undefined;

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    if (!this.items$) {
      this.items$ = this.http.get<Item[]>(this.apiURL).pipe(shareReplay(1));
    }
    return this.items$;
  }
}
