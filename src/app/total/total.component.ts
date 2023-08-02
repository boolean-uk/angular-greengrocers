import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent implements OnInit {
  total: number = 0;
  totalSubscription!: Subscription;

  constructor(private readonly groceriesService: GroceriesService) {}

  ngOnInit(): void {
    this.groceriesService.getTotalPrice().subscribe((totalPrice) => {
      this.total = totalPrice;
    });
  }
}
