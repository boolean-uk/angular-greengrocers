import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GroceriesListComponent } from './groceries-list/groceries-list.component';

@NgModule({
  declarations: [GroceriesListComponent],
  imports: [CommonModule, HttpClientModule, BrowserModule],
  exports: [GroceriesListComponent],
})
export class GroceriesModule {}
