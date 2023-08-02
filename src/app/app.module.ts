import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GreengrocersModule } from './greengrocers/greengrocers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, GreengrocersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
