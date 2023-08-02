import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';
import { ImageService } from '../utilities/generateImagePath.service.';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input('cartItem') cartItem?: [Item, number];

  constructor(
    private readonly cartService: CartService,
    private readonly imageService: ImageService
  ) {}

  ngOnInit(): void {}

  generateImagePath(item: Item): string {
    return this.imageService.generateImagePath(item);
  }
}
