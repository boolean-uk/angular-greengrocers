import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../models/item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input('item') item: Item | null = null;
  @Input('quantity') quantity: number | undefined = 1;
  @Output('incrementQuantity') incrementQuantity = new EventEmitter<Item>;
  @Output('decrementQuantity') decrementQuantity = new EventEmitter<Item>;

    addQuantity() {
      if(!this.item)
        throw new Error('cannot change quantity on null')
      this.incrementQuantity.emit(this.item)
    }
   removeQuantity() {
     if(!this.item)
       throw new Error('cannot change quantity on null')
     this.decrementQuantity.emit(this.item)
   }
}
