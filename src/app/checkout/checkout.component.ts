import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  itemNamesWithCount$: Observable<Map<string, number>> = this.itemsService.getItemNamesWithCountInBasket()

  constructor(private readonly itemsService: ItemsService) { }
}
