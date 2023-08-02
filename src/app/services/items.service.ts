import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, find, map, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items$: Observable<Item[]> = this.http.get<Item[]>(`${environment.apiUrl}groceries`)
  private itemCountsSubject = new BehaviorSubject(new Map<string, number>())
  itemCounts$ = this.itemCountsSubject.asObservable()

  constructor(private readonly http: HttpClient) { }

  addItem(itemId: string) {
    const currentBasket = this.itemCountsSubject.getValue()
    const quantity = currentBasket.get(itemId) || 0
    currentBasket.set(itemId, quantity + 1)
    this.itemCountsSubject.next(currentBasket)
  }

  removeItem(itemId: string) {
    const currentBasket = this.itemCountsSubject.getValue()
    const quantity = currentBasket.get(itemId) || 0
    if (quantity <= 1) {
      currentBasket.delete(itemId)
    } else {
      currentBasket.set(itemId, quantity - 1)
    }
    this.itemCountsSubject.next(currentBasket)
  }

  // getCostOfBasket(): Observable<number> {
  //   return this.itemCounts$.pipe(
  //     map((itemCounts: Map<string, number>) => {
  //       let cost = 0

  //       itemCounts.forEach(((quantity: number, itemId: string) => {
  //         this.items$.pipe(
  //           map(items => items.find(item => item.id === itemId)),
  //           tap((items: Item[]) => cost += items[0]?.price * quantity)
  //         )
  //       }))
  //       return cost
  //     })
  //   )
  // }

  getCostOfBasket(): Observable<number> {
    return this.itemCounts$.pipe(
      switchMap((itemCounts: Map<string, number>) => {
        // Use the items$ observable to get the latest list of items from the API.
        return this.items$.pipe(
          map((items: Item[]) => {
            let totalCost = 0;

            // Iterate through each item in the itemCounts map.
            itemCounts.forEach((quantity, itemId) => {
              // Find the corresponding item from the list of items.
              const item = items.find((item) => item.id === itemId);

              if (item) {
                // Calculate the cost of each item and accumulate the total cost.
                totalCost += item.price * quantity;
              }
            });

            return totalCost;
          })
        );
      })
    );
  }

  getItemNamesWithCountInBasket(): Observable<Map<string, number>> {
    return this.itemCounts$.pipe(
      map((itemCounts: Map<string, number>) => {
        const itemNamesWithCount = new Map<string, number>();

        itemCounts.forEach((quantity, itemId) => {
          this.items$.pipe(
            map((items: Item[]) => items.find(item => item.id === itemId))
          ).subscribe((item: Item | undefined) => {
            if (item) {
              itemNamesWithCount.set(item.name, quantity);
            }
          });
        });

        return itemNamesWithCount;
      })
    );
  }
}