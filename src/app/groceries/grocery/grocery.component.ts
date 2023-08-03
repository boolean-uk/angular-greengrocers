import { Component, Input } from '@angular/core';
import { CartServiceService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {
  @Input() item!: Item
  constructor(private readonly cartService: CartServiceService){}
  addToCart(): void{
    this.cartService.addToCart(this.item)
  }
}
