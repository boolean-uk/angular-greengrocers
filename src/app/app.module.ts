import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GreengrocersModule } from './greengrocers/greengrocers.module';
import { CartModule } from './cart/cart.module';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutModule } from './checkout/checkout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, GreengrocersModule, CheckoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
