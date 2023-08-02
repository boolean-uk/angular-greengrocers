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
    this.items = await this.greengrocersService.getItems()
  }

  async addItemToCart(item :Item){
    console.log(item);
    this.greengrocersService.addItemToCart(item);
  }

  async sortItemByPriceInStore(){
    this.greengrocersService.sortItemsByPrice();
    this.ngOnInit();  
  }

  sortItemByNameInCart(){
    this.greengrocersService.sortCartByName();
    this.ngOnInit(); 
  }

   showVegetables(){
   this.greengrocersService.showVegetables();
    this.ngOnInit();
  }
  showFruits(){
    this.greengrocersService.showFruits();
    this.ngOnInit();
  }

}
