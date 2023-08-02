import { Component, OnInit } from '@angular/core';
import { FruitService } from './fruit.service';
import { Item } from './models/item';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-green-grocers';
  isFruitButtonClicked = false;
  isVegetableButtonClicked = false;
  isEverythingButtonClicked = true;
  isSortedByPrice = false;
  isSortedByName = false;
  priceSorting:string = "Price ▲"
  nameSorting:string = "Name ▲"
  buttons = [this.isEverythingButtonClicked,this.isFruitButtonClicked, this.isVegetableButtonClicked]
  constructor(
    private readonly fruitService: FruitService,
    private readonly cartService: CartService
  ) {this.cartService.getAllItems().subscribe((cart) => {
    this.cart = cart;
  });}

  vegetables: Item[] = [];
  fruits: Item[] = [];
  groceriesToShow: Item[] = [];
  groceries: Item[]=[];
  cart = new Map();

  async addToCart(item: Item) {
    await this.cartService.addToCart(item);
    await console.log(this.cart);
  }

  async ngOnInit() {
    this.vegetables = await this.fruitService.getVegetables();
    this.fruits = await this.fruitService.getFruits();
    this.groceries = await [...this.vegetables, ...this.fruits];
      this.groceriesToShow= await this.groceries
    console.log(this.vegetables);
    console.log(this.fruits);
    console.log(this.groceries);
    
  }
  showOnlyFruits()
  {
    this.groceriesToShow=this.fruits
    this.isEverythingButtonClicked = false;
    this.isVegetableButtonClicked=false;
    this.isFruitButtonClicked = true;
  }
  showOnlyVegetables()
  {
  this.groceriesToShow=this.vegetables
  this.isEverythingButtonClicked = false;
  this.isVegetableButtonClicked=true;
  this.isFruitButtonClicked = false;
  }
  showEverything()
  {
  this.groceriesToShow=this.groceries
  this.isEverythingButtonClicked = true;
  this.isVegetableButtonClicked=false;
  this.isFruitButtonClicked = false;
  }
  priceSortingButton()
  {
    if(this.isSortedByPrice)
    {
      this.priceSorting ="Price ▲"
    }
    else{
     this.priceSorting="Price ▼"
    }
  }

  async sortByPrice()
  {
    this.priceSortingButton()
    if(this.isSortedByPrice){
       this.isSortedByPrice= !this.isSortedByPrice
       this.groceriesToShow.sort((a:Item,b:Item) => a.price-b.price)
    }
    else
    {
      this.isSortedByPrice= !this.isSortedByPrice
      this.groceriesToShow.sort((a:Item,b:Item) => b.price-a.price)
    }
  }
  nameSortingButton()
  {
    if(this.isSortedByName)
    {
      this.nameSorting ="Name ▲"
    }
    else{
     this.nameSorting="Name ▼"
    }
  }
 async sortByName()
  {
    this.nameSortingButton()
    if(this.isSortedByName){
       this.isSortedByName= !this.isSortedByName
       this.groceriesToShow.sort((a:Item,b:Item) => a.name.localeCompare(b.name))
    }
    else
    {
      this.isSortedByName= !this.isSortedByName
      this.groceriesToShow.sort((a:Item,b:Item) => b.name.localeCompare(a.name))
    }
  }
}
