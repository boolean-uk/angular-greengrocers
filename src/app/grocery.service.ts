import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getGroceries(): Observable<Item[]> {
    return this.http.get<any>(`${this.apiUrl}groceries`);
  }
}
