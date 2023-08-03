import { ShoppingBasketService } from './services/shopping-basket.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GroceriesListComponent } from './groceries-list/groceries-list.component';
import { GroceriesBasketComponent } from './groceries-basket/groceries-basket.component';
import { GroceriesBasketTotalComponent } from './groceries-basket-total/groceries-basket-total.component';

@NgModule({
  declarations: [
    GroceriesListComponent,
    GroceriesBasketComponent,
    GroceriesBasketTotalComponent,
  ],
  imports: [CommonModule, HttpClientModule, BrowserModule],
  exports: [
    GroceriesListComponent,
    GroceriesBasketComponent,
    GroceriesBasketTotalComponent,
  ],
})
export class GroceriesModule {}
