import {Component, OnInit} from '@angular/core';
import {GroceriesService} from "../../services/groceries.service";
import {map, Observable} from "rxjs";
import {Groceries, GroceryType} from "../../models/groceries";

@Component({
  selector: 'app-groceries', templateUrl: './groceries.component.html', styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  groceries$: Observable<Groceries[]> | null = null
  filteredGroceries$: Observable<Groceries[]> | null = null;
  nameAscendingOrder: boolean = true
  priceAscendingOrder: boolean = true
  groceryTypes: GroceryType[] = [GroceryType.fruit, GroceryType.vegetable]
  selectedTypes: Set<GroceryType> = new Set<GroceryType>(this.groceryTypes);

  constructor(private readonly groceriesService: GroceriesService) {
  }

  ngOnInit(): void {
    this.groceries$ = this.groceriesService.groceries$
    this.filteredGroceries$ = this.groceries$
  }

  sortByName() {
    this.groceries$ = this.groceriesService.sortByName(this.nameAscendingOrder)
    this.nameAscendingOrder = !this.nameAscendingOrder
  }

  sortByPrice() {
    this.groceries$ = this.groceriesService.sortByPrice(this.priceAscendingOrder)
    this.priceAscendingOrder = !this.priceAscendingOrder
  }

  toggleFilterByType(type: GroceryType) {
    if (this.selectedTypes.has(type)) {
      this.selectedTypes.delete(type);
    } else {
      this.selectedTypes.add(type);
    }

    // if (this.selectedTypes.size === 0) {
    //   this.filteredGroceries$ = this.groceries$;
    // } else {
    this.filteredGroceries$ = this.groceries$!.pipe(map((groceries: Groceries[]) => groceries.filter((grocery: Groceries) => this.selectedTypes.has(grocery.type))));
    // }
  }
}
