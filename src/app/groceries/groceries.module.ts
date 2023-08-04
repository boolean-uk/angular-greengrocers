import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryComponent } from './grocery/grocery.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StyleTypePipe } from './style-type.pipe';




@NgModule({
  declarations: [
    GroceryComponent,
    GroceryListComponent,
    FilterPipe,
    SortPipe,
    StyleTypePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [
    GroceryListComponent
  ]
})
export class GroceriesModule { }
