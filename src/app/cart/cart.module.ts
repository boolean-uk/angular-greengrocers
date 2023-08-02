import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartTotalComponent } from './cart-total/cart-total.component';

@NgModule({
  declarations: [CartTotalComponent, CartItemListComponent, CartItemComponent],
  imports: [CommonModule],
  exports: [CartTotalComponent, CartItemListComponent, CartItemComponent],
})
export class CartModule {}
