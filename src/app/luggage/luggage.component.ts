import { Component, Input, OnInit} from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../models/item'

@Component({
  selector: 'app-luggage',
  templateUrl: './luggage.component.html',
  styleUrls: ['./luggage.component.css']
})

export class CartComponent {
  constructor(private readonly itemsService: ItemsService) {}

  addItem(item: Item): void {
    this.itemsService.addItem(item);
  }

  removeItem(item: Item): void {
    this.itemsService.removeItem(item);
  }

  getItemCount(item: Item) {
    return this.itemsService.getLuggageItems().get(item);
  }

  getItems(): Item[] {
    return Array.from(this.itemsService.getLuggageItems().keys());
  }
}
