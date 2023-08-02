import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/services/store.service';
import { Item } from '../models/item';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  itemsInCart: CartItem[] = []
  constructor(private readonly storeService: StoreService){}

  ngOnInit(){
    this.itemsInCart = this.storeService.getAllItemsInCart();
  }

  async add(item: Item){
    this.storeService.addToCart(item);
    this.storeService.message.next(this.storeService.getTotalPriceAfterAdding());
  }

  remove(item: Item){
    this.storeService.removeFromCart(item);
    this.storeService.message.next(this.storeService.totalCost);
  }
}

