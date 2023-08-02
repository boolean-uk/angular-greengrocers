import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [AppComponent, ItemsListComponent, CheckoutComponent, ItemComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ItemsListComponent },
      { path: 'checkout', component: CheckoutComponent },
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
