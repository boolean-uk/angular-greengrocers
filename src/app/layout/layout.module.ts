import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    GroceryListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GroceryListComponent,
    CartComponent
  ]
})
export class LayoutModule { }
