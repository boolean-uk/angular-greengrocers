import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';



@NgModule({
  declarations: [
    GroceryListComponent,
    GroceryItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GroceryListComponent
  ]
})
export class GreengrocersModule { }
