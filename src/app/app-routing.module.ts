import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryListComponent } from './layout/grocery-list/grocery-list.component';
import { CheckoutComponent } from './layout/checkout/checkout.component';


const routes: Routes = [
  {
    path: '',
    component: GroceryListComponent 
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }