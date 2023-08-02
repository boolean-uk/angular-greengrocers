import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [AppComponent, StoreComponent, CartComponent, TotalComponent, SortPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
