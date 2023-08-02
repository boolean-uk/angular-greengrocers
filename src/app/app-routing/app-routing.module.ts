import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from "../item-list/item-list.component";
import {CartComponent} from "../cart/cart.component";

const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'store', component:  ItemListComponent},
  { path: 'checkout', component: CartComponent },
];
@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // AppRoutingRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
