import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule to use HttpClient
import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [AppComponent, TotalComponent], 
  imports: [BrowserModule, HttpClientModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}