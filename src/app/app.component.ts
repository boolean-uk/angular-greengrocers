import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-green-grocers';
  constructor(private readonly cartService: CartServiceService) { }

  total = 0

  ngOnInit(): void {
    this.cartService.totalPrice$.subscribe((total) => {
      this.total = total
    })
  }

}
