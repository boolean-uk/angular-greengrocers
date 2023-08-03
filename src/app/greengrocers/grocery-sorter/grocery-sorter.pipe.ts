import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/models/item';
import { GrocerySorter } from './grocery-sorter.component';

@Pipe({
  name: 'grocerySorter'
})
export class GrocerySorterPipe implements PipeTransform {

  transform(items: Item[] | null, sorter: GrocerySorter | null): Item[] | null {
    if(items == null || sorter == null)
      return items
    return structuredClone(items).sort(sorter);
  }

}
