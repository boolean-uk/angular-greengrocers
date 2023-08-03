import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreengrocersComponent } from './greengrocers/greengrocers.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CostComponent } from './cost/cost.component';

@NgModule({
  declarations: [AppComponent, GreengrocersComponent, CartComponent, CostComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
