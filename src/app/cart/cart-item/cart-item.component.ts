import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem!: CartItem

  constructor(private cartService: CartService) {}

  add() {
    if(this.cartItem.quantity < 99)
      this.cartService.addToCart(this.cartItem.item)
  }
  
  subtract() {
    this.cartService.removeFromCart(this.cartItem.item, 1)
  }

  validate(el: HTMLInputElement) {
    const quantity = Number(el.value)

    if(isNaN(quantity) || quantity <= 0)
      this.cartService.removeFromCart(this.cartItem.item)

    if(quantity > 99)
      this.cartItem.quantity = 99
  }

}
