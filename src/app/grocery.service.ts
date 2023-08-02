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

  //get groceries
  async getGrocers(): Promise<Item[]>{
    const response = await firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}groceries`))
    console.log('getting list of groceries', response)
    return response;
  }
}
