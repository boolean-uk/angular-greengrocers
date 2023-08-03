import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private groceriesRefresh$ = new BehaviorSubject<void>(undefined)
  public groceries$ = this.groceriesRefresh$.pipe(
    switchMap(() =>
      this.http.get<Item[]>(`${environment.apiUrl}groceries`).pipe(
        catchError((error) => {
          this.snackBar.open('Error fetching groceries please try again later', 'Close', {
            duration: 5000,
            verticalPosition: 'top' as MatSnackBarVerticalPosition
          })
          console.error('Error fetching groceries:', error);
          return of([]);
        })
      )
    )
  );

  constructor(private readonly http: HttpClient, private readonly snackBar: MatSnackBar) { }
}

