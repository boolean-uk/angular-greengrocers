import { Component } from '@angular/core';
import { SortDirection } from '../sort-by-price/sort-by-price.component';
import { SortNameOrder } from '../sort-by-name/sort-by-name.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  currentSortDirection: SortDirection = SortDirection.ASC;
  currentNameOrder: SortNameOrder = SortNameOrder.ALP;

  onSortDirectionChanged(newDirection: SortDirection): void {
    this.currentSortDirection = newDirection;
  }
  onNameOrderChanged(newDirection: SortNameOrder): void {
    this.currentNameOrder = newDirection;
  }
}
