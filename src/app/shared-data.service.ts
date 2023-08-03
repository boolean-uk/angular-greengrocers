import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor() { }
  private items: Map<Item,number>=new Map<Item,number>();

  addItem(item: Item) {
    if(this.items.has(item)){
    this.items.set(item,this.items.get(item)!+1);
  }else{
    this.items.set(item,1);
  }
  }

  getItems() {
    return this.items;
  }
}
