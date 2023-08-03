import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private readonly itemsService: ItemsService) { }

  getTotalPrice(): number {
    return this.itemsService.getTotalPrice();
  }
}
