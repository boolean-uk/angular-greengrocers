import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-grocery-sorter',
  templateUrl: './grocery-sorter.component.html',
  styleUrls: ['./grocery-sorter.component.css']
})
export class GrocerySorterComponent {
  @Output() onChange = new EventEmitter<GrocerySorter>()

  sortBy = SortBy
  sort: Sort | null = null

  toggleSort(sortBy: SortBy) {
    if(this.sort === null || this.sort.param != sortBy) {
      this.sort = {
        param: sortBy,
        direction: "ASC"
      }
    } else {
        let {direction} = this.sort
        if(direction == "ASC")
          this.sort.direction = "DESC"
        else
          this.sort = null
    }

    this.emitSorter()
  }

  private emitSorter() {
    let sorter: GrocerySorter = (i1, i2) => this.compare(i1.id, i2.id)

    if(this.sort === null) {
      this.onChange.emit(sorter)
      return
    }

    const order = this.sort.direction === "ASC" ? 1 : -1
    sorter = (i1, i2) => order * this.compare(i1[this.sort!.param], i2[this.sort!.param])

    this.onChange.emit(sorter)
  }

  private compare<T>(param1: T, param2: T): number {
    if(typeof param1 === "string" && typeof param2 === "string")
      return param1.localeCompare(param2)
    
    if (typeof param1 === "number" && typeof param2 === "number")
      return param1 - param2

    return 0
  }
}

enum SortBy {
  NAME = "name",
  PRICE = "price"
}

interface Sort {
  param: SortBy,
  direction: "ASC" | "DESC",
}

export type GrocerySorter = (item1: Item, item2: Item) => number

