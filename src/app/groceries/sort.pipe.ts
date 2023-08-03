import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: Item[], propertyName: string, ascending: boolean): Item[] {
    if (!items || items.length <= 1 ) {
      return items;
    }
    if (ascending) {
      return items.sort((a, b) => {
        if (a[propertyName] < b[propertyName]) {
          return -1;
        } else if (a[propertyName] > b[propertyName]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return items.sort((a, b) => {
      if (a[propertyName] > b[propertyName]) {
        return -1;
      } else if (a[propertyName] < b[propertyName]) {
        return 1;
      } else {
        return 0;
      }
    });


  }

}
