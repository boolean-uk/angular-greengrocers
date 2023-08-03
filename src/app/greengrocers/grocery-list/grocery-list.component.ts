import { Component } from '@angular/core';
import { GreengrocersService } from '../greengrocers.service';
import { FilterType } from '../grocery-filter/grocery-filter.component';
import { Observable, map } from 'rxjs';
import { Item } from 'src/app/models/item';
import { GrocerySorter } from '../grocery-sorter/grocery-sorter.component';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {

  groceries$ = this.getGroceries(FilterType.ALL)

  constructor(private greengrocersService: GreengrocersService) {}

  getGroceries(filter: FilterType): Observable<Item[]> {
    switch(filter) {
      case FilterType.FRUITS:
        return this.greengrocersService.getFruits()
      case FilterType.VEGETABLES:
        return this.greengrocersService.getVegetables()
      default:
        return this.greengrocersService.getGroceries()
    }
  }

  filterGroceries(filter: FilterType) {
    this.groceries$ = this.getGroceries(filter)
  }

  sortGroceries(items: Item[] | null, sorter: GrocerySorter) {
    items?.sort(sorter)
  }

}
