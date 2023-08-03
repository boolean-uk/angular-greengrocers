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
  grocersList: Item[] = []

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

  //get grocers by type
  async getGrocersByType(type: string): Promise<Item[]>{
    const response = await firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}groceries?type=` + type))
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

  async sortGrocers(option: string): Promise<Item[]> {
    let groceries = await this.getGrocers()
    if (option === 'price') {
      //sort by price
      groceries.sort((a, b) => a.price - b.price);
      console.log('sorte by price')
    } else if (option === 'name') {
      //sort by name
      groceries.sort((a, b) => a.name.localeCompare(b.name))
      console.log('sorte by name')
    } else if (option === 'fruit' || option === 'vegetable') {
      //sort by type
      groceries = await this.sortGrocersType(option)
      console.log('sorte by type')
    } else {
      console.log('sorte by default')
    }
    this.grocersList = groceries
    return this.grocersList
  }

  async sortGrocersType(type: string): Promise<Item[]> {
    return this.getGrocersByType(type)
  }

}
