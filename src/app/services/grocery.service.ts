import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Item} from "../models/item";
import {firstValueFrom} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  constructor(private readonly http: HttpClient) {

  }
  private groceryList: Item[] = []

  async getGrocery() {
    const response = await firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}`));
    console.log('res', response)
    this.groceryList.push(...response)

    return response
  }
}
