import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Item, ItemType } from './models/item';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _items: Promise<Item[]> = this.getAllItems();
  luggageItems: Map<Item, number>;
  
  constructor(private readonly http: HttpClient) {
    this.luggageItems = new Map<Item, number>();
  }

  getLuggageItems(): Map<Item, number> {
    return this.luggageItems;
  }

  addItem(item: Item) {
    if(this.luggageItems.has(item))
      this.luggageItems.set(item, this.luggageItems.get(item) as number + 1);
    else
      this.luggageItems.set(item, 1);
    return this.luggageItems.get(item)
  }

  removeItem(item: Item): boolean{
    if(!this.luggageItems.has(item)) return false;
    const currentValue = this.luggageItems.get(item) as number;
    this.luggageItems.set(item, currentValue - 1);
    if(currentValue === 1) this.luggageItems.delete(item)
    return true
  }

  async getItemsByType(type: ItemType | null) {
    if (type) {
      return await firstValueFrom(
        this.http.get<Item[]>(environment.apiUrl + 'groceries?type=' + type)
      );
    }
    return await firstValueFrom(
      this.http.get<Item[]>(environment.apiUrl + 'groceries')
    );
  }

  async getAllItems(): Promise<Item[]> {
    const response = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}groceries`)
    );
    return response;
  }
}
