import { Component, EventEmitter, Output } from '@angular/core';
import { GroceryService } from '../grocery.service';
import { Item } from '../models/item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent {

  total: number = 0
  private totalSubscription: Subscription;

  constructor(private readonly groceryService: GroceryService){
    this.totalSubscription = this.groceryService.total$.subscribe((total) => {
      this.total = total;})
  }

  ngOnDestroy() {
    this.totalSubscription.unsubscribe();
  }
}
