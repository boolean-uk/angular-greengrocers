import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('item') item: Item | null = null;
  @Input('quantity') quantity: number = 0;
  @Output('addToCart') addToCart = new EventEmitter();
  @Output('removeFromCart') removeFromCart = new EventEmitter();

  addToCartButton() {
    this.addToCart.emit(this.item);
    this.quantity++
  }

  removeFromCartButton() {
    if(this.quantity > 0) {
      this.removeFromCart.emit(this.item);
      this.quantity--
    }
  }

}
