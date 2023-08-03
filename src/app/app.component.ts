import { Component } from '@angular/core';
import { Item } from './models/item';
import { ItemsService } from './items.service';
import { StoreComponent } from './store/store.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-green-grocers';
}
