import { Component } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'],
})
export class GroceriesListComponent {
  constructor(private readonly groceriesService: GroceriesService) {}

  groceries = this.groceriesService.getItems();

  addToCart(item: any) {
    console.log('Adding to cart', item);
  }
}
