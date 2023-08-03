import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { TotalComponent } from './total/total.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FormsModule } from '@angular/forms';
import { SortByPriceComponent } from './sort-by-price/sort-by-price.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    TotalComponent,
    ProductFilterComponent,
    SortByPriceComponent,
    StoreComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ShopModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
