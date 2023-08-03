import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
//total:number=0
items=this.sharedDataService.getItems()
constructor(private sharedDataService: SharedDataService) { }

countTotal(){
  let total=0
  for( let item of Array.from(this.items.keys())){
    total+=item.price*this.items.get(item)!
  }
  return total.toFixed(2);
}
}
