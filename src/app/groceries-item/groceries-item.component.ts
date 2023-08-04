import { Component, OnInit, Input } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';
import { ImageService } from '../utilities/generateImagePath.service.';

@Component({
  selector: 'app-groceries-item',
  templateUrl: './groceries-item.component.html',
  styleUrls: ['./groceries-item.component.css'],
})
export class GroceriesItemComponent implements OnInit {
  @Input('grocery') grocery?: Item;

  constructor(
    private readonly groceryService: GroceriesService,
    private readonly cartService: CartService,
    private readonly imageService: ImageService
  ) {}

  ngOnInit(): void {}

  generateImagePath(item: Item): string {
    return this.imageService.generateImagePath(item);
  }

  addToCart(): void {
    if (this.grocery) {
      this.cartService.addToCart(this.grocery);
    }
  }
}
