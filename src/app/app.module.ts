import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ShopModule } from './shop/shop.module';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [AppComponent, CartComponent, CartItemComponent],
  imports: [BrowserModule, HttpClientModule, ShopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
