import { Component } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { ShoppingBasketService } from '../services/shopping-basket.service';
import { type BasketItem } from '../models/basket';
import { Item } from '../models/item';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'],
})
export class GroceriesListComponent {
  constructor(
    private readonly groceriesService: GroceriesService,
    private readonly shoppingBasketService: ShoppingBasketService
  ) {}

  groceries = this.groceriesService.getItems();

  addToCart(item: Item) {
    const newItem: BasketItem = {
      ...item,
      quantity: 1,
    };

    this.shoppingBasketService.addToBasket(newItem);
  }
}
