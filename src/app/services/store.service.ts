import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getGroceries(query?: string): Observable<Item[]> {
    const url = environment.apiUrl + "groceries";
    const params = query ? new HttpParams().set('query', query) : undefined;

    return this.http.get<Item[]>(url, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          return throwError(() => error);
        }
        return throwError(() => 'Something went wrong. Please try again later.');
      })
    );
  }
}
