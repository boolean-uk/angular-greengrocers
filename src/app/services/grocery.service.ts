import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Item} from "../models/item";
import {firstValueFrom} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  constructor(private readonly http: HttpClient) {}
  groceryCart: Map<Item,number> = new Map<Item, number>()

  async getGrocery() {
    const response = await firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}`));
    console.log('res', response)

    return response
  }

  async getFruit() {
    const response = await firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}?type=fruit`));
    console.log('res', response)

    return response
  }

  async getVegetable() {
    const response = await firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}?type=vegetable`));
    console.log('res', response)

    return response
  }
}
