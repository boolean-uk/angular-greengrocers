import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { type BasketItem, type ShoppingBasket } from '../models/basket'; // Assuming you have your models in a separate file.

@Injectable({
  providedIn: 'root',
})
export class ShoppingBasketService {
  private shoppingBasketSubject = new BehaviorSubject<ShoppingBasket>({
    items: [],
    total: 0,
  });
  shoppingBasket$ = this.shoppingBasketSubject.asObservable();

  addToBasket(item: BasketItem) {
    const existingItem = this.shoppingBasketSubject
      .getValue()
      .items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.shoppingBasketSubject.next({
        ...this.shoppingBasketSubject.getValue(),
        items: [
          ...this.shoppingBasketSubject.getValue().items,
          { ...item, quantity: 1 },
        ],
      });
    }
    this.calculateTotal();
  }

  removeFromBasket(item: BasketItem) {
    const existingItem = this.shoppingBasketSubject
      .getValue()
      .items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity--;
      if (existingItem.quantity <= 0) {
        const updatedItems = this.shoppingBasketSubject
          .getValue()
          .items.filter((i) => i.id !== item.id);
        this.shoppingBasketSubject.next({
          ...this.shoppingBasketSubject.getValue(),
          items: updatedItems,
        });
      }
    }
    this.calculateTotal();
  }

  private calculateTotal() {
    const items = this.shoppingBasketSubject.getValue().items;
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    this.shoppingBasketSubject.next({
      ...this.shoppingBasketSubject.getValue(),
      total,
    });
  }
}
