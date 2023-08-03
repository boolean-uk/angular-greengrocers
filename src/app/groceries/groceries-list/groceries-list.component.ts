import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { ShoppingBasketService } from '../services/shopping-basket.service';
import { type BasketItem } from '../models/basket';
import { Item } from '../models/item';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'],
})
export class GroceriesListComponent implements OnChanges {
  @Input() filterType: string = '';
  @Input() sortType: string = '';

  public filteredGroceries$: Observable<Item[]> | undefined;

  constructor(
    private readonly groceriesService: GroceriesService,
    private readonly shoppingBasketService: ShoppingBasketService
  ) {}

  public addToCart(item: Item) {
    const newItem: BasketItem = {
      ...item,
      quantity: 1,
    };

    this.shoppingBasketService.addToBasket(newItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterType'] || changes['sortType']) {
      this.filterAndSortItems();
    }
  }

  private filterItems(items: Item[]): Item[] {
    if (!this.filterType) {
      return items;
    }
    return items.filter((item) => item.type === this.filterType);
  }

  private sortItems(items: Item[]): Item[] {
    if (!this.sortType) {
      return items;
    }
    if (this.sortType === 'name') {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortType === 'price') {
      return items.sort((a, b) => a.price - b.price);
    }
    return items;
  }

  private filterAndSortItems() {
    this.groceriesService
      .getItems()
      .pipe(
        map((items) => this.filterItems(items)),
        map((filteredItems) => this.sortItems(filteredItems)),
        catchError(() => of([]))
      )
      .subscribe((sortedItems) => {
        this.filteredGroceries$ = of(sortedItems);
      });
  }
}
