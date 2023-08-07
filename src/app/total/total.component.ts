import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  constructor(private readonly storeService: StoreService) {}

  getTotal() {
    return this.storeService.total
  }
}
