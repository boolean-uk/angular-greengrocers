import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-green-grocers';
  costOfBasket$: Observable<number> = this.itemsService.getCostOfBasket()

  constructor(private readonly itemsService: ItemsService) { }
}
