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

  addItem(id: string) {
    const currentBasket = this.itemCountsSubject.getValue()
    const quantity = currentBasket.get(id) || 0
    currentBasket.set(id, quantity + 1)
    this.itemCountsSubject.next(currentBasket)
  }

  removeItem(id: string) {
    const currentBasket = this.itemCountsSubject.getValue()
    const quantity = currentBasket.get(id) || 0
    if (quantity <= 1) {
      currentBasket.delete(id)
    } else {
      currentBasket.set(id, quantity - 1)
    }
    this.itemCountsSubject.next(currentBasket)
  }

  setItemCount(id: string, count: number) {
    if (count < 0) {
      console.error(`cannot set item count to a negative number`)
      return
    }

    const currentBasket = this.itemCountsSubject.getValue()
    if (count === 0) {
      currentBasket.delete(id)
    } else {
      currentBasket.set(id, count)
    }
    this.itemCountsSubject.next(currentBasket)
  }

  getCostOfBasket(): Observable<number> {
    return this.itemCounts$.pipe(
      switchMap((itemCounts: Map<string, number>) => {
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
      }),
    );
  }
}