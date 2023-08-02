import {Component} from '@angular/core';
import {CartSummaryService} from "../../services/cart-summary.service";

@Component({
  selector: 'app-cart', templateUrl: './cart.component.html', styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private readonly cartService: CartSummaryService) {
  }


  cart(){
    return this.cartService.cart
  }

  total(): number {
    return this.cartService.total()
  }
}
