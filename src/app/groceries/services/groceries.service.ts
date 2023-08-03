import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Item, ItemType } from 'src/app/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  constructor(private readonly http: HttpClient) {}

  async getAllGroceries() {
    return await firstValueFrom(
      this.http.get<Item[]>(environment.apiUrl + 'groceries')
    );
  }

  async getGroceriesByType(type: ItemType | null) {
    if (type) {
      return await firstValueFrom(
        this.http.get<Item[]>(environment.apiUrl + 'groceries?type=' + type)
      );
    }
    return await firstValueFrom(
      this.http.get<Item[]>(environment.apiUrl + 'groceries')
    );
  }
}
