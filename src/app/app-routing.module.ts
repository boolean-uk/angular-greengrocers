import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainStoreComponent } from './main-store/main-store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  { 
    path: 'store',
    component: MainStoreComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
