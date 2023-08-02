import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private readonly http: HttpClient) { }

  myCart: {[key: string]: Item[]} = {}

  //get groceries
  async getGrocers(): Promise<Item[]>{
    const response = await firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}groceries`))
    console.log('getting list of groceries', response)
    return response;
  }

  putToCart(item: Item){
    if(item){
      let id = item.id
      if(this.myCart[id]){
        this.myCart[id].push(item)
      } else this.myCart[id] = [item]
    }
  }

  removeFromCart(item: Item){
    if(item){
      let id = item.id
      if(this.myCart[id].length === 1){
        delete this.myCart[id]
      } else if (this.myCart[id].length > 1){
        this.myCart[id].pop()
      }
    }
  }

  get cart(): {[key: string]: Item[]}{
    return this.myCart
  }

}
