import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.sharedDataService.getItems();
  constructor(private sharedDataService: SharedDataService) { }
  getBindedChosenItems(): Item[] {
    return Array.from(this.items.keys());
  }
  changeQuantity(item:Item,quantity:number){
      this.items.set(item,this.items.get(item)!+quantity)
      if(this.items.get(item)!<=0){
          this.items.delete(item)
      }
  }
}
