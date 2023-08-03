import { Component, OnInit } from '@angular/core';
import { GroceryService} from '../service/grocery.service';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-cart-total-price',
  templateUrl: './cart-total-price.component.html',
  styleUrls: ['./cart-total-price.component.css']
})

export class CartTotalPriceComponent implements OnInit {
  cart : CartItem[] =[];

  constructor(private readonly groceryService : GroceryService) {} 

  async ngOnInit() {
    this.cart = this.groceryService.getCart();
  }

  getPriceOfCart() : number {
    return this.groceryService.getTotalPrice();
  }
}