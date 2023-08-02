import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
})
export class StoreItemComponent {
  @Input() storeItem!: Item;

  constructor(private storeService: StoreService) {}

  onAddToCart() {
    this.storeService.addToCart(this.storeItem);
  }
}
