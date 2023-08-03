import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GroceryService} from "../services/grocery.service";
import {Item} from "../models/item";

@Component({
  selector: 'app-grocery-total',
  templateUrl: './grocery-total.component.html',
  styleUrls: ['./grocery-total.component.css']
})
export class GroceryTotalComponent implements OnInit{
  constructor(private readonly groceryService: GroceryService) {}

  cart = new Map<Item, number>
  sum: number = 0

  ngOnInit(): void {
    this.cart=this.groceryService.groceryCart
  }

  calcTotal(): string {
    this.sum=0
    for(let item of this.cart.keys()){
      // @ts-ignore
        this.sum+=item.price*this.cart.get(item);
    }
    return this.sum.toFixed(2)
  }
}
