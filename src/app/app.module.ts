import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { GroceriesModule } from './groceries/groceries.module';
import { CartModule } from './cart/cart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, GroceriesModule, CartModule, BrowserAnimationsModule, AppRoutingModule, RouterModule, MatToolbarModule, MatIconModule, MatBadgeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
