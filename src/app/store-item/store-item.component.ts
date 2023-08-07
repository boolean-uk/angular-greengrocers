import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent {
  @Input('item') item: Item | null = null;
  @Output('addToCart') addToCart = new EventEmitter();

  clicked() {
    this.addToCart.emit(this.item);
  }
}
