import {Component, OnInit} from '@angular/core';
import {ItemService} from "./services/item.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-green-grocers';
  total: number = this.itemService.calculateTotal();
  private cartUpdateSubscription: Subscription = new Subscription();

  constructor(public itemService: ItemService) {
  }

  ngOnInit() {
    this.cartUpdateSubscription = this.itemService.cartUpdated$.subscribe(() => {
      this.updateTotal();
    });
    this.updateTotal();  }

  ngOnDestroy() {
    this.cartUpdateSubscription.unsubscribe();
  }

  updateTotal() {
    this.total = this.itemService.calculateTotal();
  }
}
