import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Item[], type: string): Item[] {
    if (items == null) {
      return [];
    }
    if (type === 'all') {
      return items
    }
    return items.filter(item => item.type === type);
  }

}

