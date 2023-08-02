import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Item } from '../../models/item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
})
export class CartItemListComponent implements OnInit, OnDestroy {
  cartItemList: [Item, number][] = [];
  private onDestroy = new Subject<void>();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItemList$
      .pipe(takeUntil(this.onDestroy))
      .subscribe((updatedCartItemList) => {
        this.cartItemList = updatedCartItemList;
      });
  }

  onIncrement(item: Item) {
    this.cartService.incrementItemQuantity(item);
  }

  onDecrement(item: Item) {
    this.cartService.decrementItemQuantity(item);
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
