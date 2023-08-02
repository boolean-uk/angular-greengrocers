import { Component, OnInit, Input } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-groceries-item',
  templateUrl: './groceries-item.component.html',
  styleUrls: ['./groceries-item.component.css'],
})
export class GroceriesItemComponent implements OnInit {
  @Input('grocery') grocery?: Item;

  constructor(private readonly groceryService: GroceriesService) {}

  ngOnInit(): void {}
}
