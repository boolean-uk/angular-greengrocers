import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent {
  
  constructor(private cartService: CartService) {}

  getTotal(): number {
    return this.cartService.getTotal()
  }
}
