import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart$ = this.cartService.getCart()
  total = this.cartService.getTotal()

  constructor(private cartService: CartService) {}
}
