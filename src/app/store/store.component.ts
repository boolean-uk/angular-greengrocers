import { Component } from '@angular/core';
import { SortDirection } from '../sort-by-price/sort-by-price.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  currentSortDirection: SortDirection = SortDirection.ASC;
  onSortDirectionChanged(newDirection: SortDirection): void {
    this.currentSortDirection = newDirection;
  }
}
