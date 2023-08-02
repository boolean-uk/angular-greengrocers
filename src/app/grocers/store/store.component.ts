import { Component, OnInit } from '@angular/core';
import { GreengrocersService } from 'src/app/grocers/greengrocers.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{

  constructor(private readonly greengrocersService : GreengrocersService){}
  
  
  items :Item[] | null =null;

  async ngOnInit() {
   this.items = await this.greengrocersService.getAllGroceries();
   console.log(this.items);
  }

  async addItemToCart(item :Item){
    console.log(item);
    this.greengrocersService.addItemToCart(item);
  }

}
