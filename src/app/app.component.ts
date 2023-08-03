import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart/cart-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-green-grocers';

  constructor(private readonly cartService: CartServiceService) { }

  numberOfProductsInBasket$ = this.cartService.cartItems$.pipe(
    map(items => items.reduce((sum, item) => sum + item.quantity, 0))
  );

}

