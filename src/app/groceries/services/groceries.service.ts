import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type Item } from '../models/item';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  private readonly apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  async getItems(): Promise<Item[]> {
    try {
      return firstValueFrom(this.http.get<Item[]>(this.apiURL));
    } catch (error) {
      console.log('error in getTodos', error);
    }
    return [];
  }
}
