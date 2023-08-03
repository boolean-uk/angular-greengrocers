import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreItemListComponent } from './store-item-list/store-item-list.component';
import { StoreItemComponent } from './store-item/store-item.component';

@NgModule({
  declarations: [StoreItemListComponent, StoreItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [StoreItemListComponent, StoreItemComponent],
})
export class StoreModule {}
