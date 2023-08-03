import { Component, OnDestroy } from '@angular/core';
import { GrocersService } from 'src/grocers.service';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit, OnDestroy{
  total: number = 0;
  totalSubscription!: Subscription;

  constructor(private readonly grocersService: GrocersService) {}

  ngOnInit(): void {
    this.totalSubscription = this.grocersService.getTotalPrice().subscribe((totalPrice) => {
      this.total = totalPrice;
    });
  }

  ngOnDestroy(): void {
    if (this.totalSubscription) {
      this.totalSubscription.unsubscribe();
    }
  }
}