import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GroceriesComponent} from './components/groceries/groceries.component';
import {CartComponent} from './components/cart/cart.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, GroceriesComponent, CartComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
