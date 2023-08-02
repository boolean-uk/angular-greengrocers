import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { SortPipe } from './sort.pipe';
import { TypePipe } from './type.pipe';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainStoreComponent } from './main-store/main-store.component';

@NgModule({
  declarations: [AppComponent, StoreComponent, CartComponent, TotalComponent, SortPipe, TypePipe, CheckoutComponent, MainStoreComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
