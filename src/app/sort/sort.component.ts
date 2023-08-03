import { Component, EventEmitter, Output } from '@angular/core';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {

  selectedSortOption: string = 'grocers'
  @Output('sortOptionChange') sortOptionChange = new EventEmitter<string>()

  constructor(private readonly groceryService: GroceryService){}

  grocersChange() {
    this.sortOptionChange.emit(this.selectedSortOption)
  }
}
