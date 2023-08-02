import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GreengrocersService {

  constructor(private http: HttpClient) { }

  getGroceries(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/groceries`)
  }
}
