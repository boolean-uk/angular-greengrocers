import { Component, OnInit, Output } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  items: any | null = null;
  chosenProperty: string = 'name';

  constructor(private readonly itemsService: ItemsService) { }

  async ngOnInit() {
    this.items = await this.itemsService.getAllItems();
  }

  changeChosenProperty(property: string) {
    this.chosenProperty = property;
  }

  addItem(item: Item): void {
    this.itemsService.addItem(item);
  }
}
