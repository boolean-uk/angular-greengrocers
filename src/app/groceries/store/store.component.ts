import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  constructor(private readonly groceriesService: GroceriesService) {}

  groceries: Item[] | null = null;

  async ngOnInit(): Promise<void> {
    this.groceries = await this.groceriesService.getAllGroceries();
  }
}
