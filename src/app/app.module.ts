import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, ItemListComponent, CartComponent],
  imports: [BrowserModule, HttpClientModule, MatIconModule, BrowserAnimationsModule],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
