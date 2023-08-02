import { Component, OnInit, Input } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-groceries-item',
  templateUrl: './groceries-item.component.html',
  styleUrls: ['./groceries-item.component.css'],
})
export class GroceriesItemComponent implements OnInit {
  @Input('grocery') grocery?: Item;

  constructor(
    private readonly groceryService: GroceriesService,
    private readonly cartService: CartService
  ) {}

  ngOnInit(): void {}
  generateImagePath(item: Item): string {
    return `assets/icons/${item.id.toLowerCase()}.svg`;
  }

  addToCart(): void {
    if (this.grocery) {
      this.cartService.addToCart(this.grocery);
    }
  }
}
