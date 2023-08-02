import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-grocery-filter',
  templateUrl: './grocery-filter.component.html',
  styleUrls: ['./grocery-filter.component.css']
})
export class GroceryFilterComponent {
  @Output() onChange = new EventEmitter<FilterType>()
  
  filter: FilterType = FilterType.ALL
  filters = FilterType

  setFilter(filter: FilterType) {
    this.filter = filter;
    this.onChange.emit(filter)
  }
}

export enum FilterType {
  ALL,
  FRUITS,
  VEGETABLES
}