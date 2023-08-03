import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-green-grocers';
  numberOfProductsInBasket = 0
  constructor(private readonly cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.numberOfProductsInBasket = items.reduce((sum, item) => sum + item.quantity, 0);
    });

  }

}
