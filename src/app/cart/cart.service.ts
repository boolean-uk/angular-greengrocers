import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Item } from '../models/item';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItemList: [Item, number][] = [];
  private _cartSubject = new BehaviorSubject<[Item, number][]>(
    this._cartItemList
  );
  cartItemList$ = this._cartSubject.asObservable();

  private _onDestroy = new Subject<void>();

  constructor(private storeService: StoreService) {
    this.storeService.addToCartEvent$
      .pipe(takeUntil(this._onDestroy))
      .subscribe((item) => this.addToCart(item));
  }

  addToCart(item: Item) {
    const foundIndex = this._cartItemList.findIndex(
      ([cartItem]) => cartItem === item
    );

    if (foundIndex !== -1) {
      let [, count] = this._cartItemList[foundIndex];
      this._cartItemList[foundIndex] = [item, count + 1];
    } else {
      this._cartItemList.push([item, 1]);
    }

    this._cartSubject.next(this._cartItemList);
  }

  incrementItemQuantity(item: Item) {
    const foundIndex = this._cartItemList.findIndex(
      ([cartItem]) => cartItem === item
    );

    if (foundIndex !== -1) {
      let [, count] = this._cartItemList[foundIndex];
      this._cartItemList[foundIndex] = [item, count + 1];
      this._cartSubject.next(this._cartItemList);
    }
  }

  decrementItemQuantity(item: Item) {
    const foundIndex = this._cartItemList.findIndex(
      ([cartItem]) => cartItem === item
    );

    if (foundIndex !== -1) {
      let [, count] = this._cartItemList[foundIndex];
      count = count - 1;

      if (count === 0) {
        this._cartItemList.splice(foundIndex, 1);
      } else {
        this._cartItemList[foundIndex] = [item, count];
      }

      this._cartSubject.next(this._cartItemList);
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
