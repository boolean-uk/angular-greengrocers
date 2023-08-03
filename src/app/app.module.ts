import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GrocerModule } from './grocer.module';
import {StoreComponent} from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { SharedDataService } from './shared-data.service';
import { TotalComponent } from './total/total.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,StoreComponent, CartComponent, TotalComponent],
  imports: [BrowserModule,GrocerModule,AppRoutingModule],
  providers: [SharedDataService],
  bootstrap: [AppComponent],
})
export class AppModule {
   
}
