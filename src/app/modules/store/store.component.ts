import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {StoreService} from "../../services/store.service";
import {catchError, map, Observable, of} from "rxjs";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  items$!: Observable<Item[]>;
  // @ts-ignore
  tempItems: Observable<Item[]>;
  error$!: Observable<string>;

  constructor(private storeService: StoreService, private cartService: CartService) {}

  ngOnInit() {
    this.items$ = this.storeService.getGroceries("");
    this.tempItems = this.items$;
    this.error$ = this.items$.pipe(
      map(() => null),
      catchError((error) => of(error.error || 'Something went wrong in store.components.ts'))
    );
  }

  addToCart(item: Item): void {
    this.cartService.addToCart(item);
  }

  sortByVegetables() {
    this.items$ = this.tempItems.pipe(
      map((items) => items.filter(item => item.type === 'vegetable'))
    );
  }

  sortByFruits() {
    this.items$ = this.tempItems.pipe(
      map((items) => items.filter(item => item.type === 'fruit'))
    );
  }
}
