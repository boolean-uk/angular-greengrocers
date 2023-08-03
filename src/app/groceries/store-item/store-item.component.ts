import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent {
  @Input('grocery') grocery: Item | null = null;

  constructor(private cartServise: CartService) {}

  addToCart() {
    if (!this.grocery) return;
    this.cartServise.addToCart(this.grocery);
  }

  getImagePath() {
    if (!this.grocery) return '';
    const id = this.grocery.id.toString().padStart(3, '0');
    return `./assets/icons/${id}.svg`;
  }
}
