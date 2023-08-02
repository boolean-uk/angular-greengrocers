import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GroceriesComponent} from './components/groceries/groceries.component';
import {CartComponent} from './components/cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import {GroceryItemComponent} from './components/groceries/grocery-item/grocery-item.component';
import {NgOptimizedImage} from "@angular/common";
import {CartItemComponent} from './components/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [AppComponent, GroceriesComponent, CartComponent, GroceryItemComponent, CartItemComponent],
  imports: [BrowserModule, HttpClientModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
