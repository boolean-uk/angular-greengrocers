import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import {CurrencyPipe} from '@angular/common';

@NgModule({
  declarations: [AppComponent, StoreComponent, ItemComponent, CartComponent, TotalComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
