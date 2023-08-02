import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../models/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('item') item: Item | null = null;
  @Output('addToCart') addToCart = new EventEmitter<Item>();

  clicked() {
    if(!this.item)
      throw new Error('cannot add null item')

    this.addToCart.emit(this.item)
  }
}
