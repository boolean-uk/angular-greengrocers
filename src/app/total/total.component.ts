import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})

export class TotalComponent {
  chosenItems: Map<Item, number>;

  constructor(private readonly itemsService: ItemsService) {
    this.chosenItems = this.itemsService.getChosenItems();
  }

  getTotalPrice(): number {
    return [...this.chosenItems].reduce((totalCost, [item, quantity]) => totalCost + item.price * quantity, 0);
  }
} 
