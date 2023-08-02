import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Item } from './models/item';
import { environment } from 'src/environments/environment';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items: Promise<Item[]> = this.getAllItems();
  chosenItems: Map<Item, number>;
  
  constructor(private readonly http: HttpClient) {
    this.chosenItems = new Map<Item, number>();
  }
  
  async getAllItems(): Promise<Item[]> {
    const response = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}groceries`)
    );
    console.log(response);
    return response;
  }


  getChosenItems(): Map<Item, number> {
    return this.chosenItems;
  }

  addItem(item: Item): void {
    if(this.chosenItems.has(item))
      this.chosenItems.set(item, this.chosenItems.get(item) as number + 1);
    else
      this.chosenItems.set(item, 1);
    console.log(this.chosenItems);
  }

  removeItem(item: Item): void {
    if(!this.chosenItems.has(item)) return;
    let currentValue = this.chosenItems.get(item) as number;
    this.chosenItems.set(item, currentValue - 1);
    if(currentValue === 1)
      this.chosenItems.delete(item)
    console.log(this.chosenItems);
  }

  getTotalPrice(): number {
    return [...this.chosenItems].reduce((totalCost, [item, quantity]) => totalCost + item.price * quantity, 0);
  }
}
