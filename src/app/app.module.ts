import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [AppComponent, ItemListComponent, CartComponent],
  imports: [BrowserModule, HttpClientModule, MatIconModule, BrowserAnimationsModule, MatButtonToggleModule, FormsModule, AppRoutingModule, MatTooltipModule],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
