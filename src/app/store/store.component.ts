import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  items: Item[] = [];

  constructor(private readonly storeService: StoreService) {}
  async ngOnInit() {
    this.items = await this.storeService.getAllItems();
    
  }

  addItemToCart(item: Item){
    this.storeService.addToCart(item);
    this.storeService.message.next(this.storeService.getTotalPriceAfterAdding());
  }

}
