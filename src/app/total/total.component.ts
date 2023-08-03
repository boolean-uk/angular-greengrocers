import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  constructor(private readonly cartService: CartService) {}

  getTotalSum(): Number {
    return this.cartService.calculateTotalSum()
  }

}
