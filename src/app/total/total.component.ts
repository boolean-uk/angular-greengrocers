import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  totalPrice: number | null = null

  constructor(private readonly groceriesService: GroceriesService) {}

  async ngOnInit() {
    this.groceriesService.behaviorSubject.subscribe((total) => {
      this.totalPrice = total;
    });
  }
}
