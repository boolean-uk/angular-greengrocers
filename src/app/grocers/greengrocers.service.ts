import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GreengrocersService {


  cart: IteminCart[] = [];
  
  constructor(private readonly http: HttpClient){
   
  }
  items: Promise<Item[]> = this.getAllGroceries();

  async getAllGroceries(){
    const response = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}`)
  
    );
    return response;
  }

  async getItems():Promise<Item[]>{
    return this.items;
  }
  

  addItemToCart(itemToAdd : Item){
    const existingCartItem = this.cart.find((cartItem) => cartItem.item === itemToAdd);
    if(existingCartItem){
      existingCartItem.quantity +=1;
    }else{
      this.cart.push({ item: itemToAdd, quantity: 1 });
    }

      console.log("cart:", this.cart)
      console.log("total",this.getTotal());
  }

  getCart(){
    return this.cart;
  }

  increaseQuantity(itemInCart: IteminCart){
    itemInCart.quantity+=1;
  }
  decreaseQuantity(iteminCart: IteminCart){
    if(iteminCart.quantity <= 1 ){
      const indexToRemove = this.cart.findIndex((cartItem) => cartItem === iteminCart);
      this.cart.splice(indexToRemove, 1);
    }
    iteminCart.quantity--;
  }

  getTotal() : number{
    let total: number =0;
    this.cart.forEach(element => {
      total += element.item.price* element.quantity
    });
    return total;
  }

  async sortItemsByPrice() {
   // this.cart.sort((a, b) => a.item.price - b.item.price);
  (await this.items).sort((a, b) => a.price - b.price);


   
    
  }
  async sortCartByName(){
   
    (await this.items).sort((a, b) => a.name.localeCompare(b.name));
  }

  async showFruits(){
    return   (await this.items).sort((a, b) => a.type.localeCompare(b.type));
  }
  async showVegetables(){
    return   (await this.items).sort((a, b) => a.type.localeCompare(b.type)).reverse();
  }


}


export interface IteminCart {
  item : Item;
  quantity : number;
}

