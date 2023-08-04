import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { TotalComponent } from './total/total.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FormsModule } from '@angular/forms';
import { SortByPriceComponent } from './sort-by-price/sort-by-price.component';
import { StoreComponent } from './store/store.component';
import { SortByNameComponent } from './sort-by-name/sort-by-name.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { GroceriesListComponent } from './groceries-list/groceries-list.component';
import { GroceriesItemComponent } from './groceries-item/groceries-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    TotalComponent,
    ProductFilterComponent,
    SortByPriceComponent,
    StoreComponent,
    SortByNameComponent,
    CheckoutComponent,
    NotFoundComponent,
    GroceriesItemComponent,
    GroceriesListComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
