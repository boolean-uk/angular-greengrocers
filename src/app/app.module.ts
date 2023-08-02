import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroceriesModule } from './groceries/groceries.module';
import { GroceriesListComponent } from './src/app/groceries/groceries-list/groceries-list.component';

@NgModule({
  declarations: [AppComponent, GroceriesListComponent],
  imports: [BrowserModule, GroceriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
