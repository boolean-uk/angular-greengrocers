import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('item') item: Item | null = null;
  @Output('addToCard') addToCardEmitter = new EventEmitter<string>();

  onAddToCard() {
    if (!this.item) {
      throw new Error('cannot toggle complete on null');
    }
    this.addToCardEmitter.emit(this.item.id);
  }
}
