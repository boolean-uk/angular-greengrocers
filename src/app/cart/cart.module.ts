import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { CartTotalComponent } from './cart-total/cart-total.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartTotalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CartComponent,
    CartTotalComponent
  ]
})
export class CartModule { }
