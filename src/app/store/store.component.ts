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
  filterAndSorted: Item[] = [];
  groceriesServiceSubscription!: Subscription;

  constructor(private readonly grocersService: GrocersService) {}

  ngOnInit(){
    this.groceriesServiceSubscription = this.grocersService.getGroceries().subscribe((response) => {
      this.store = response;
      this.filterAndSorted = response.slice();
    });
  }

  ngOnDestroy(): void {
    this.groceriesServiceSubscription.unsubscribe();
  }

  sortItemsByName(): void {
    this.filterAndSorted = this.filterAndSorted.sort((a, b) => a.name.localeCompare(b.name));
    console.log('clicked');
  }

  sortItemsByPrice(): void {
    this.filterAndSorted = this.filterAndSorted.sort((a, b) =>
      a.price.toLocaleString().localeCompare(b.price.toLocaleString())
    );
    console.log('clicked2');
  }

  filterItemsFruits(): void {
    this.filterAndSorted = this.store.filter((item) => item.type === 'fruit');

  }
  filterItemsVegetables(): void {
    this.filterAndSorted = this.store.filter((item) => item.type === 'vegetable');
    console.log('5');
  }

  filterAll():void {
    this.filterAndSorted = this.store.slice();
  }

}
