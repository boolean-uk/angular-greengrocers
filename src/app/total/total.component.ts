import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})

export class TotalComponent {
  constructor(private readonly itemsService: ItemsService) { }

  getTotalPrice(): number {
    return this.itemsService.getTotalPrice();
  }
} 
