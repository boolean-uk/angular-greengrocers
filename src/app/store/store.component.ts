import { Component, OnInit, OnDestroy } from '@angular/core';
import { GrocersService } from 'src/grocers.service';
import { Item } from '../models/item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy {
  store: Item[] = [];
  groceriesServiceSubscription!: Subscription;

  constructor(private readonly grocersService: GrocersService) {}

  ngOnInit(): void {
    this.grocersService.getGroceries().subscribe((response) => {
      this.store = response;
    });
  }

  ngOnDestroy(): void {
    this.groceriesServiceSubscription.unsubscribe();
  }

}
