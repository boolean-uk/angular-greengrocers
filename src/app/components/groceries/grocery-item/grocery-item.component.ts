import {Component, Input} from '@angular/core';
import {Vegetable} from "../../../models/vegetable";

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent {
  @Input('item') item: Vegetable | null = null
}
