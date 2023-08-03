import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './models/item';

@Pipe({
  name: 'typePipe'
})

export class TypePipe implements PipeTransform {
  transform(items: Item[], type: string): Item[] {
    if (!items || items.length <= 1 || type === 'all') return items;
    return items.filter((item) => item.type === type);
  }
}