import {Component, OnInit} from '@angular/core';
import {GroceriesService} from "../../services/groceries.service";
import {Observable} from "rxjs";
import {Vegetable} from "../../models/vegetable";

@Component({
  selector: 'app-groceries', templateUrl: './groceries.component.html', styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  groceries$: Observable<Vegetable[]> | null = null

  nameAscendingOrder: boolean = true
  priceAscendingOrder: boolean = true

  constructor(private readonly groceriesService: GroceriesService) {
  }

  ngOnInit(): void {
    this.groceries$ = this.groceriesService.groceries$
  }

  sortByName() {
    this.groceries$ = this.groceriesService.sortByName(this.nameAscendingOrder)
    this.nameAscendingOrder = !this.nameAscendingOrder
  }

  sortByPrice() {
    this.groceries$ = this.groceriesService.sortByPrice(this.priceAscendingOrder)
    this.priceAscendingOrder = !this.priceAscendingOrder
  }
}
