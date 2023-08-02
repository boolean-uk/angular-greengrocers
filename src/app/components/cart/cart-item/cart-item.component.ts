import {Component, Input} from '@angular/core';
import {CartItem, CartSummaryService} from "../../../services/cart-summary.service";

@Component({
  selector: 'app-cart-item', templateUrl: './cart-item.component.html', styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('cart-item') cartItem: CartItem = <CartItem>{}

  constructor(private readonly cartService: CartSummaryService) {
  }

  changeQuantity(quantity: number) {
    this.cartService.changeQuantity(this.cartItem, quantity)
  }
}
