import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GroceryComponent } from './greengrocers/grocery/grocery.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

const routes: Route[] = [
  { path: "", component: GroceryComponent},
  { path: "checkout", component: CheckoutComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
