import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreComponent } from './wardrobe/wardrobe.component';
import { CartComponent } from './luggage/luggage.component';
import { TotalComponent } from './total/total.component';
import { BrowserModule } from '@angular/platform-browser';
import { SortPipe } from './sort-pipe.pipe';


@NgModule({
  declarations: [AppComponent, StoreComponent, CartComponent, TotalComponent, SortPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
