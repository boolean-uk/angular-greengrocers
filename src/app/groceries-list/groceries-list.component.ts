import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'],
})
export class GroceriesListComponent implements OnInit {
  groceriesRefresh$ = new BehaviorSubject<Item[]>([]);
  groceries$: Observable<Item[]> = this.groceriesRefresh$.asObservable();
  constructor(private readonly groceriesService: GroceriesService) {}

  ngOnInit(): void {
    this.updateTodos();
  }
  private updateTodos() {
    this.groceriesService.getAllGroceries().subscribe((grocery) => {
      this.groceriesRefresh$.next(grocery);
    });
  }
}
