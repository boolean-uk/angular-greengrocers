import { Item } from '../models/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  generateImagePath(item: Item): string {
    return `assets/icons/${item.id.toLowerCase()}.svg`;
  }
}
