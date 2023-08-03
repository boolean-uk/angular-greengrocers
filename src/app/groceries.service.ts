import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  items: Promise<Item[]> = this.fetchItems()
  itemsInCart: Item[] = []
  totalPrice: number = 0
  behaviorSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private readonly http: HttpClient) {
  }

  getItemsArray(): Promise<Item[]>{ 
    return this.items
  }

  async fetchItems() : Promise<Item[]> {
    const response = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}`
      ));

      return response
  }

  addItemToCart(item: Item) {
    if(this.itemsInCart.includes(item)){
      item.quantity += 1
    } else {
      item.quantity = 1
      this.itemsInCart.push(item)
    }
    this.totalPrice += item.price
    this.behaviorSubject.next(this.totalPrice)
  }

  removeItemFromCart(item: Item) {
    if(item.quantity > 1){
      item.quantity -= 1
    } else {
      this.itemsInCart.splice(this.itemsInCart.indexOf(item), 1)
    }
    this.totalPrice -= item.price
    this.behaviorSubject.next(this.totalPrice)
  }
  
}
