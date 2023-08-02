import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent {
  @Input() item!: Item;

  constructor(private readonly groceriesService: GroceriesService) {}

  addItemToCart() {
    this.groceriesService.addItemToCart(this.item);
  }
}
