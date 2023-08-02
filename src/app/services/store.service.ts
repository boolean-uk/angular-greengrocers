import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})

export class StoreService {
  constructor(private readonly http: HttpClient) {
  this.getAllItems().then((chars) => (this.itemsList = chars));
}
  
  private itemsList: Item[] = [];

  async getAllItems(): Promise<Item[]> {
    const response = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}`)
    );

    console.log('res', response);

    return response;
  }

  items: Promise<Item[]> = Promise.resolve(this.getAllItems());

  itemsInCart: ItemsInCart = {};

  total = 0;

  async showFruits(){
    return   (await this.items).filter((el) => el.type === "fruit");
  }

  async showVegetables(){
    return   (await this.items).filter((el) => el.type === "vegetable");
  }
}

export type ItemsInCart = Record<string, number>;