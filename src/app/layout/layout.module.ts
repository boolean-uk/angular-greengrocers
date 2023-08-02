import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    GroceryListComponent,
    CartComponent,
    TotalComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GroceryListComponent,
    CartComponent,
    CheckoutComponent
  ]
})
export class LayoutModule { }
