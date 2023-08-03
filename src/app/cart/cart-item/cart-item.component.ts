import { Component, Input } from '@angular/core';

import { Item } from 'src/app/models/item';
import { CartServiceService, ItemInCart } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('item') item!: ItemInCart;

  constructor(private readonly service: CartServiceService){}

  onQuantityChange() {
    if (this.item.quantity <= 0) this.item.quantity = 1
    if(!Number.isInteger(this.item.quantity)) this.item.quantity = Math.floor(this.item.quantity)
    this.service.changeQuantity()
  }

  deleteItem() {
    this.service.delete(this.item.item.id)
  }

}
