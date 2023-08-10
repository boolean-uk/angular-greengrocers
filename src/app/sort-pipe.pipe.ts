import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './models/item';

@Pipe({
  name: 'sortPipe'
})

export class SortPipe implements PipeTransform {
  transform(items: Item[], filter: string) {
    if (!items || items.length < 2 ) return items;
    return items.sort((val1, val2) => {
      if (val1[filter] > val2[filter]) return 1;
      else if (val1[filter] < val2[filter]) return -1;
    return 0;
    });
  }
}