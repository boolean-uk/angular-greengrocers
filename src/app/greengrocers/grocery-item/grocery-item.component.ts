import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent {
  @Input() item!: Item

  constructor(private cartService: CartService) {}

  add() {
    this.cartService.addToCart(this.item)
  }
}
