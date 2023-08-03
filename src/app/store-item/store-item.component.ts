import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { GrocersService } from 'src/grocers.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent {
  @Input() item!: Item;

  constructor(private readonly grocersService: GrocersService) {}

  addItemToCart() {
    this.grocersService.addItemToCart(this.item);
  }
}
