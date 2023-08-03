import { Component } from '@angular/core';
import { ShoppingBasket } from './groceries/models/basket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-green-grocers';
  selectedFilter: string = '';
  selectedSort: string = '';

  shoppingBasket: ShoppingBasket = { items: [], total: 0 };

  updateShoppingBasket(shoppingBasket: ShoppingBasket) {
    this.shoppingBasket = shoppingBasket;
  }

  filterByType(filterType: string) {
    this.selectedFilter = filterType;
  }

  sortBy(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.selectedSort = target.value;
    }
  }
}
