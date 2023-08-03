import { Cart, Item } from './models/item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private readonly http: HttpClient) { }

  myCart: {[key: string]: Item[]} = {}
  total: number = 0

  private totalSubject = new BehaviorSubject<number>(this.total);
  total$ = this.totalSubject.asObservable();

  get cart(): {[key: string]: Item[]}{
    return this.myCart
  }

  get totalAmount(): number{
    return this.total
  }

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
    this.updateTotal();
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
    this.updateTotal();
  }

  private updateTotal() {
    let totalCost = 0;
    for (const key in this.myCart) {
      if (this.myCart.hasOwnProperty(key)) {
        const itemsArr = this.myCart[key];
        for (const item of itemsArr) {
          totalCost += item.price;
        }
      }
    }
    this.total = totalCost;
    this.totalSubject.next(totalCost);
  }

  isCartEmpty(): boolean{
    return Object.keys(this.myCart).length === 0
  }

}
