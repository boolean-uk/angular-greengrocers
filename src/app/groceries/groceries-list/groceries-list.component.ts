import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { ShoppingBasketService } from '../services/shopping-basket.service';
import { type BasketItem } from '../models/basket';
import { Item } from '../models/item';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'],
})
export class GroceriesListComponent implements OnChanges {
  @Input() filterType: string = ''; // Define the Input property to receive the filter value

  constructor(
    private readonly groceriesService: GroceriesService,
    private readonly shoppingBasketService: ShoppingBasketService
  ) {}

  filteredGroceries$: Observable<Item[]> | undefined;

  addToCart(item: Item) {
    const newItem: BasketItem = {
      ...item,
      quantity: 1,
    };

    this.shoppingBasketService.addToBasket(newItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterType']) {
      this.filteredGroceries$ = this.groceriesService.getItems().pipe(
        map((items) => {
          if (!this.filterType) return items;
          return items.filter((item) => item.type === this.filterType);
        })
      );
    }
  }
}
