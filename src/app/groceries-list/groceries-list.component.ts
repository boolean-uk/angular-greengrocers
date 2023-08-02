import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item';
import { GroceriesFilteringService } from '../services/groceries-filtering.service';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'],
})
export class GroceriesListComponent implements OnInit {
  groceriesRefresh$ = new BehaviorSubject<Item[]>([]);
  groceries$: Observable<Item[]> = this.groceriesRefresh$.asObservable();

  constructor(
    private readonly groceriesFilteringService: GroceriesFilteringService
  ) {}

  ngOnInit(): void {
    this.updateGroceries();
  }
  private updateGroceries() {
    this.groceriesFilteringService.groceries$.subscribe((grocery) => {
      this.groceriesRefresh$.next(grocery);
    });
  }
}
