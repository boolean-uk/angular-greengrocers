import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Vegetable} from "../models/vegetable";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  private readonly API_URL: string = environment.apiUrl + "groceries"

  constructor(private readonly http: HttpClient) {
  }

  loadGroceries(): Observable<Vegetable[]> {
    return this.http.get<Vegetable[]>(this.API_URL)
  }

}
