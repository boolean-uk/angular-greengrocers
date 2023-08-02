import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent implements OnInit {
  constructor(private groceriesService: GroceriesService) {}

  total: number = 0;

  ngOnInit() {
    this.groceriesService.total$.subscribe((newTotal) => {
      this.total = newTotal;
    });
  }
}
