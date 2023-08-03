import { Component, Input } from '@angular/core';
import { type ShoppingBasket, type BasketItem } from '../models/basket';

@Component({
  selector: 'app-groceries-basket-total',
  templateUrl: './groceries-basket-total.component.html',
  styleUrls: ['./groceries-basket-total.component.css'],
})
export class GroceriesBasketTotalComponent {
  @Input() total: number = 0;
}
