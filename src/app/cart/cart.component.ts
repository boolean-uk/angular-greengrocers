import { Component } from '@angular/core';
import { ItemsInCart, StoreService } from '../services/store.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private readonly storeService: StoreService) {}

  itemsInCart: ItemsInCart = this.storeService.itemsInCart;
  items = this.storeService.items;

  addToCart(item: Item) {
    if(!this.itemsInCart.hasOwnProperty(item.name)){
      this.storeService.itemsInCart[item.name] = 0;
    }
    this.storeService.itemsInCart[item.name]++
    this.storeService.total += item.price
  }

  removeFromCart(item: Item) {
    this.storeService.itemsInCart[item.name]--
    this.storeService.total -= item.price
    if(this.storeService.itemsInCart[item.name] == 0){
      delete this.storeService.itemsInCart[item.name]
    }
  }
}
