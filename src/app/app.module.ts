import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrocersModule } from './grocers/grocers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,GrocersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
