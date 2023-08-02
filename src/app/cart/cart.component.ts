import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart: Item[] | null = null

  constructor(private readonly groceriesService: GroceriesService) {}

  async ngOnInit() {
    this.itemsInCart = this.groceriesService.itemsInCart
  }

  addItem(item: Item) {
    this.groceriesService.addItemToCart(item)
  }

  removeItem(item: Item) {
    this.groceriesService.removeItemFromCart(item)
  }

}
