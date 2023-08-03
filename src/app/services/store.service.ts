import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private readonly http: HttpClient) { }

  items: Promise<Item[]> = this.getItems()

  async getItems() : Promise<Item[]> {
    const response =  await firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}`))

    console.log(response)

    return response 
  }
}
