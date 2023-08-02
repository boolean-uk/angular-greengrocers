import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesItemComponent } from '../groceries-item/groceries-item.component';
import { GroceriesListComponent } from '../groceries-list/groceries-list.component';
import { GroceriesService } from '../services/groceries.service';

@NgModule({
  declarations: [GroceriesItemComponent, GroceriesListComponent],
  imports: [CommonModule],
  exports: [GroceriesItemComponent, GroceriesListComponent],
})
export class ShopModule {
  constructor(private readonly groceriesService: GroceriesService) {}
  groceries$ = this.groceriesService.getAllGroceries();
  async ngOnInit() {}
}
