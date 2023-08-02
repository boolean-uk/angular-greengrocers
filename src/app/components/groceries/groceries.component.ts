import {Component, OnInit} from '@angular/core';
import {GroceriesService} from "../../services/groceries.service";
import {Observable} from "rxjs";
import {Groceries, GroceryType} from "../../models/groceries";

@Component({
  selector: 'app-groceries', templateUrl: './groceries.component.html', styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  groceries$: Observable<Groceries[]> | null = null

  groceryTypes: GroceryType[] = [GroceryType.fruit, GroceryType.vegetable]


  constructor(private readonly groceriesService: GroceriesService) {
  }

  ngOnInit(): void {
    this.groceries$ = this.groceriesService.groceries$
  }

  sortByName() {
    this.groceries$ = this.groceriesService.sortByName()

  }

  sortByPrice() {
    this.groceries$ = this.groceriesService.sortByPrice()
  }

  priceAscending(): boolean {
    return this.groceriesService.priceAscendingOrder
  }

  toggleFilterByType(type: GroceryType) {
    this.groceries$ = this.groceriesService.filterByType(type)
  }

  nameAscending() {
    return this.groceriesService.nameAscendingOrder
  }
}
