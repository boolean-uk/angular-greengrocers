import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    StoreItemComponent,
    CartComponent,
    CartItemComponent,
    TotalComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
