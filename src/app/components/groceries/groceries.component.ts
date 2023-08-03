import {Component, OnInit} from '@angular/core';
import {GroceriesService} from "../../services/groceries.service";
import {GroceryType} from "../../models/groceries";

@Component({
  selector: 'app-groceries', templateUrl: './groceries.component.html', styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  groceryTypes: GroceryType[] = [GroceryType.fruit, GroceryType.vegetable]


  constructor(private readonly groceriesService: GroceriesService) {
  }

  ngOnInit(): void {
  }

  getGroceries() {
    return this.groceriesService.filteredGroceries$
  }

  sortByName() {
    this.groceriesService.sortByName()

  }

  sortByPrice() {
    this.groceriesService.sortByPrice()
  }

  priceAscending(): boolean {
    return this.groceriesService.priceAscendingOrder
  }

  toggleFilterByType(type: GroceryType) {
    this.groceriesService.filterByType(type)
  }

  nameAscending() {
    return this.groceriesService.nameAscendingOrder
  }
}
