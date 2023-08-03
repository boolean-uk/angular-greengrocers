import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-by-price',
  templateUrl: './sort-by-price.component.html',
  styleUrls: ['./sort-by-price.component.css'],
})
export class SortByPriceComponent {
  private direction: SortDirection = SortDirection.ASC;
  @Output() sortDirection = new EventEmitter<SortDirection>();

  toggleSort(): void {
    this.direction =
      this.direction === SortDirection.ASC
        ? SortDirection.DESC
        : SortDirection.ASC;
    this.sortDirection.emit(this.direction);
  }
  get buttonText(): string {
    return this.direction === SortDirection.ASC ? 'descending' : 'ascending';
  }
}

export enum SortDirection {
  ASC = 'ascending',
  DESC = 'descending',
}
