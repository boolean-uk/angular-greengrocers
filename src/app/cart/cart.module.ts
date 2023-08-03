import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EmptCartComponent } from './empt-cart/empt-cart.component'
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CartItemComponent,
    CartComponent,
    EmptCartComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
