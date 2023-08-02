import { Component, OnInit } from '@angular/core';
import { GroceriesService } from './groceries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GroceriesService],
})
export class AppComponent {
  title = 'angular-green-grocers';
}
