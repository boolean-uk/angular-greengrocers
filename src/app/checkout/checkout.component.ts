import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  // itemNamesWithCount$: Observable<Map<string, number>> = this.itemsService.getItemNamesWithCountInBasket()
  itemCounts$: Observable<Map<string, number>> = this.itemsService.itemCounts$

  constructor(private readonly itemsService: ItemsService) { }

  addToCard(itemId: string) {
    this.itemsService.addItem(itemId)
  }

  removeFromCard(itemId: string) {
    this.itemsService.removeItem(itemId)
  }

  setCount(itemId: string, count: string) {
    if (!isNaN(parseInt(count))) {
      this.itemsService.setItemCount(itemId, Number(count))
    } else {
      console.error(`item ${itemId} count must be a number`)
    }
  }
}
