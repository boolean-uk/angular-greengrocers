import { Component } from '@angular/core';
import { GroceryService } from '../grocery.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {

  constructor(private readonly service: GroceryService) { }
  groceries$: Observable<Item[]> = this.service.groceries$
  type: string = 'all'
  property: Property = {name:'name', ascending: true }

  setFilterType(type: string) {
    this.type = type
  }

  setProperty(property: Property) {
    this.property = property
  }
}
interface Property{
  name: string,
  ascending: boolean
}