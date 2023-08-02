import { GroceryService } from './../grocery.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-greengrocers',
  templateUrl: './greengrocers.component.html',
  styleUrls: ['./greengrocers.component.css']
})
export class GreengrocersComponent {

  constructor(private readonly groceryService: GroceryService){}

  items = this.groceryService.getGrocers()

}
