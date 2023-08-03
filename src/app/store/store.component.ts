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
  
storeItems$=this.grocerService.fruit$;
items:Item[]=[]
filteredAndSortedItems :Item[]=this.items;
constructor(private sharedDataService: SharedDataService,private readonly grocerService:GrocerService){
}
  ngOnInit(): void {
    this.storeItems$.subscribe((items) => {
      this.items = items; 
    });
    this.storeItems$.subscribe((filteredAndSortedItems) => {
      this.filteredAndSortedItems = filteredAndSortedItems; 
    });
  }

addItem(item: Item) {
  this.sharedDataService.addItem(item);

}
 
sortItemsByType(){
    
}

filterItemsByType(type: string) {
 
  this.filteredAndSortedItems = this.items.filter((item) => item.type === type);

}

sortItemsByPrice() {
 
  this.filteredAndSortedItems = this.items.slice().sort((a, b) => a.price - b.price);
}

sortItemsByName() {
 
  this.filteredAndSortedItems = this.items.slice().sort((a, b) => a.name.localeCompare(b.name));
}

}
