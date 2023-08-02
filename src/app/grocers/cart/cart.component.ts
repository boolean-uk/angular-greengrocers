import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { GreengrocersService, IteminCart } from '../greengrocers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart: IteminCart[] = [];


  constructor(private readonly greengrocersService : GreengrocersService){

  } 

  async ngOnInit() {
    this.cart = this.greengrocersService.getCart();
    
  }


  increaseQ(itemInCart: IteminCart){
    this.greengrocersService.increaseQuantity(itemInCart);

  }
  decreaseQ(IteminCart: IteminCart){
    this.greengrocersService.decreaseQuantity(IteminCart);
  }
  sortItemByPriceInCart(){
    this.greengrocersService.sortCart();
    this.ngOnInit();  
  }

  sortItemByNameInCart(){
    this.greengrocersService.sortCartByName();
    this.ngOnInit(); 
  }

  showVegetables(){
    this.greengrocersService.showVegetables();
  }
  showFruits(){

  }




  




}
