import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingBasketService } from '../services/shopping-basket.service';
import { type ShoppingBasket, type BasketItem } from '../models/basket';

@Component({
  selector: 'app-groceries-basket',
  templateUrl: './groceries-basket.component.html',
  styleUrls: ['./groceries-basket.component.css'],
})
export class GroceriesBasketComponent implements OnDestroy {
  shoppingBasket: ShoppingBasket = { items: [], total: 0 };
  private basketSubscription: Subscription = new Subscription();

  @Output() shoppingBasketChange: EventEmitter<ShoppingBasket> =
    new EventEmitter<ShoppingBasket>();

  constructor(private readonly shoppingBasketService: ShoppingBasketService) {
    this.shoppingBasketService.shoppingBasket$.subscribe((basket) => {
      this.shoppingBasket = basket;
      this.shoppingBasketChange.emit(basket); // Emit the updated shoppingBasket
    });
  }

  ngOnDestroy() {
    this.basketSubscription.unsubscribe();
  }

  removeItemFromBasket(item: BasketItem) {
    this.shoppingBasketService.removeFromBasket(item);
  }

  addItemToBasket(item: BasketItem) {
    this.shoppingBasketService.addToBasket(item);
  }
}
