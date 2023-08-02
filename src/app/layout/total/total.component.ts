import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  totalPrice$ = this.cartService.totalPrice$;
  constructor(private readonly cartService: CartService) { 
  }
}
