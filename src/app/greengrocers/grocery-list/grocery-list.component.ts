import { Component } from '@angular/core';
import { GreengrocersService } from '../greengrocers.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {

  groceries$ = this.greengrocersService.getGroceries()

  constructor(private greengrocersService: GreengrocersService) {}

}
