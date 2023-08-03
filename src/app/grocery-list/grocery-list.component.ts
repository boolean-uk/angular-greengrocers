
import { Component, OnInit, Input } from '@angular/core';
import { GroceryService } from '../service/grocery.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  constructor(private readonly groceryService : GroceryService) {}

  items :Item[] | null = null;

  async ngOnInit() {
    this.items = await this.groceryService.getItems()
  }

  addItemToCart(item :Item) {
    console.log(item);
    this.groceryService.addItem(item);
  }

  sortItemsByPrice() {
    this.groceryService.getItemsByPrice();
    this.ngOnInit();  
  }

  sortItemsByName() {
    this.groceryService.getItemsByName();
    this.ngOnInit(); 
  }
  
}
