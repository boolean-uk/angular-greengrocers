import { Component } from '@angular/core';
import { ShoppingBasket } from './groceries/models/basket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-green-grocers';

  shoppingBasket: ShoppingBasket = { items: [], total: 0 };

  updateShoppingBasket(shoppingBasket: ShoppingBasket) {
    this.shoppingBasket = shoppingBasket;
  }
}
