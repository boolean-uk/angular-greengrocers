import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartModule } from './cart/cart.module';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, StoreComponent, CartComponent],
  imports: [BrowserModule, HttpClientModule, StoreModule, CartModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
