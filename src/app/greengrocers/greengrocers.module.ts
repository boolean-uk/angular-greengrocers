import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';
import { GroceryFilterComponent } from './grocery-filter/grocery-filter.component';
import { GrocerySorterComponent } from './grocery-sorter/grocery-sorter.component';
import { GroceryComponent } from './grocery/grocery.component';
import { CartModule } from '../cart/cart.module';
import { RouterModule } from '@angular/router';
import { GrocerySorterPipe } from './grocery-sorter/grocery-sorter.pipe';



@NgModule({
  declarations: [
    GroceryListComponent,
    GroceryItemComponent,
    GroceryFilterComponent,
    GrocerySorterComponent,
    GroceryComponent,
    GrocerySorterPipe
  ],
  imports: [
    CommonModule,
    CartModule,
    RouterModule,
  ],
  exports: []
})
export class GreengrocersModule { }
