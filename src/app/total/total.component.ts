import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/services/store.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent implements OnInit {
  totalPrice!: number;

  constructor(private readonly storeService: StoreService) {}
  ngOnInit() {
    this.storeService.message.subscribe((el) => {
      this.totalPrice = el;
    });
  }
}

