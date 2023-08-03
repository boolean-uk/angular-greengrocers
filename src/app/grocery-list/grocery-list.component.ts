import { Component } from '@angular/core';
import {GroceryService} from "../services/grocery.service";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {

  constructor(private readonly groceryService: GroceryService) {
  }

  groceries = this.groceryService.getGrocery()

}
