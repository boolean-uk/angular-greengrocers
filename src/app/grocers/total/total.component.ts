import { Component, OnInit } from '@angular/core';
import { GreengrocersService, IteminCart } from '../greengrocers.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit{
  
  cart : IteminCart[] =[];
  

  constructor(private readonly greengrocersService : GreengrocersService){
  
    
  } 

  async ngOnInit() {
    this.cart = this.greengrocersService.getCart();
  
  }

  getTotal() : number{
    return this.greengrocersService.getTotal();
  }


}
