import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
})
export class CartTotalComponent implements OnInit, OnDestroy {
  totalPrice: number = 0;
  private onDestroy = new Subject<void>();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItemList$
      .pipe(takeUntil(this.onDestroy))
      .subscribe((cartItemList) => {
        this.totalPrice = cartItemList.reduce(
          (total, [item, quantity]) => total + item.price * quantity,
          0
        );
      });
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
