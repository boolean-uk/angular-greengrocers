import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  items$: Observable<Item[]> = this.itemsService.items$

  constructor(private readonly itemsService: ItemsService) { }

  addToCard(itemName: string) {
    this.itemsService.addItem(itemName)
  }
}
