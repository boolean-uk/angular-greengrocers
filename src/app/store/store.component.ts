import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable, of } from 'rxjs';
import { GrocerService } from '../services/grocer.service';
import { Item } from '../models/item';
import { CartComponent } from '../cart/cart.component';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
   //Observable<undefined>|Subscribable<undefined>|Promise<undefined>;
storeItems$=this.grocerService.fruit$;//Array.from(this.sharedDataService.getItems().keys())
items:Item[]=[]
filteredAndSortedItems :Item[]=this.items;
constructor(private sharedDataService: SharedDataService,private readonly grocerService:GrocerService){
}
  ngOnInit(): void {
    this.storeItems$.subscribe((items) => {
      this.items = items; // Assign the data to the 'items' variable
    });
    this.storeItems$.subscribe((filteredAndSortedItems) => {
      this.filteredAndSortedItems = filteredAndSortedItems; // Assign the data to the 'items' variable
    });
  }

addItem(item: Item) {
  this.sharedDataService.addItem(item);

}
 
sortItemsByType(){
    
}

filterItemsByType(type: string) {
  // Filter items based on the selected type
  this.filteredAndSortedItems = this.items.filter((item) => item.type === type);

}

sortItemsByPrice() {
  // Sort items by price in ascending order
  this.filteredAndSortedItems = this.items.slice().sort((a, b) => a.price - b.price);
}

sortItemsByName() {
  // Sort items by name in alphabetical order
  this.filteredAndSortedItems = this.items.slice().sort((a, b) => a.name.localeCompare(b.name));
}

}
