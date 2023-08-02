import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreItemListComponent } from './store-item-list/store-item-list.component';
import { StoreItemComponent } from './store-item/store-item.component';

@NgModule({
  declarations: [StoreItemListComponent, StoreItemComponent],
  imports: [CommonModule],
  exports: [StoreItemListComponent, StoreItemComponent],
})
export class StoreModule {}
