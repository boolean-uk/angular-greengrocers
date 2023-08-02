import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input() cartItem!: Item;
  @Input() quantity!: number;
  @Output() increment = new EventEmitter<Item>();
  @Output() decrement = new EventEmitter<Item>();

  onIncrement() {
    this.increment.emit(this.cartItem);
  }

  onDecrement() {
    this.decrement.emit(this.cartItem);
  }
}
