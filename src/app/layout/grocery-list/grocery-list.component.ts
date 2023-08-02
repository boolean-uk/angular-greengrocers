import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/service/cart.service';
import { GroceriesService } from 'src/app/service/groceries.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {
  items$: Observable<Item[]>; 
  allItems$: Observable<Item[]>;
  currentType: string = 'all';

  constructor(
    private readonly groceriesService: GroceriesService,
    private readonly cartService: CartService,
    private readonly router: Router
  ) {
    this.allItems$ = this.groceriesService.getItems();
    this.items$ = this.allItems$; 
  }

  showFruits() {
    this.currentType = 'fruit';
    this.items$ = this.allItems$.pipe(
      map(items => items.filter(item => item.type === 'fruit'))
    );
  }

  showVegetables() {
    this.currentType = 'vegetable';
    this.items$ = this.allItems$.pipe(
      map(items => items.filter(item => item.type === 'vegetable'))
    );
  }

  showAll() {
    this.currentType = 'all'; 
    this.items$ = this.allItems$;
  }

  sortAscending() {
    this.items$ = this.items$.pipe(
      map(items => items.sort((a, b) => a.price - b.price))
    );
  }

  sortDescending() {
    this.items$ = this.items$.pipe(
      map(items => items.sort((a, b) => b.price - a.price))
    );
  }

  sortByName(){
    this.items$ = this.items$.pipe(
      map(items => items.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }

  goTocheckout(){
    this.router.navigate(['/checkout']);
  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
    console.log('Added to cart: ', item);
  }
}
