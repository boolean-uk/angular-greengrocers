import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { StoreComponent } from './store/store.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent,
    TotalComponent,
    StoreComponent,
    StoreItemComponent,
    CartItemComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [CartComponent, TotalComponent, StoreComponent, StoreItemComponent],
})
export class GroceriesModule {}
