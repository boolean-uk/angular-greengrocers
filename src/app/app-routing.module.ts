import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./components/cart/cart.component";
import {StoreComponent} from "./components/store/store.component";

const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: 'checkout', component: CartComponent},
  {path: '', redirectTo: 'store', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
