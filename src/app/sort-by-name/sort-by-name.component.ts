import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-by-name',
  templateUrl: './sort-by-name.component.html',
  styleUrls: ['./sort-by-name.component.css'],
})
export class SortByNameComponent {
  private nameOrder: SortNameOrder = SortNameOrder.ALP;
  @Output() sortOrder = new EventEmitter<SortNameOrder>();

  toggleSort(): void {
    this.nameOrder =
      this.nameOrder === SortNameOrder.ALP
        ? SortNameOrder.REV
        : SortNameOrder.ALP;
    this.sortOrder.emit(this.nameOrder);
  }
  get buttonText(): string {
    return this.nameOrder === SortNameOrder.ALP
      ? 'reverse alphabetically'
      : 'aplhabetically';
  }
}

export enum SortNameOrder {
  ALP = 'aplhabetically',
  REV = 'reverse alphabetically',
}
