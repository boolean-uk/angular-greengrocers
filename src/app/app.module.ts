import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, TotalComponent, StoreComponent, CheckoutComponent], 
  imports: [BrowserModule, HttpClientModule,  RouterModule.forRoot([
    { path: 'store', component: StoreComponent },
    { path: 'checkout', component: CheckoutComponent },
  ]),], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}