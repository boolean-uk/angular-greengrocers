import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryListComponent } from './groceries/grocery-list/grocery-list.component';
import { CartComponent } from './cart/cart/cart.component';


const routes: Routes = [
  { path: 'store', component: GroceryListComponent },
  { path: 'cart', component: CartComponent},
  { path: '', redirectTo: '/store', pathMatch: 'full' }, // Default route, navigate to store
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
