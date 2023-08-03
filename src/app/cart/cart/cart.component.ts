import { Component, OnInit } from '@angular/core';
import { CartServiceService, ItemInCart } from '../cart-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  constructor(private readonly cartService: CartServiceService) { }

  cartItems$: Observable<ItemInCart[]> = this.cartService.cartItems$;
  total$: Observable<number> = this.cartService.totalPrice$;

}
