import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'styleType'
})
export class StyleTypePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === 'fruit') return 'FRUITS';
    if (value === 'vegetable') return 'VEGETABLES';
    return 'ALL'
  }

}
