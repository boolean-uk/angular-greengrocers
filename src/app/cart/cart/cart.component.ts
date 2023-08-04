import { Component } from '@angular/core';
import { CartServiceService, ItemInCart } from '../cart.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(
    private readonly cartService: CartServiceService,
    private readonly dialog: MatDialog
  ) {}

  cartItems$: Observable<ItemInCart[]> = this.cartService.cartItems$;
  total$: Observable<number> = this.cartService.totalPrice$;

  deleteAll() {
    this.cartService.deleteAll();
  }

  openCheckoutDialog(totalPrice: number | null, cartItems: ItemInCart[] | null): void {
    this.dialog.open(CheckoutComponent, {
      width: '400px',
      data: { totalPrice, cartItems }
    });
  }
}
