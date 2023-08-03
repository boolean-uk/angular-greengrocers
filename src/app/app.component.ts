import {Component, OnDestroy, OnInit} from '@angular/core';
import {ItemService} from "./services/item.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'angular-green-grocers';
  total: number = this.itemService.calculateTotal();
  private cartUpdateSubscription: Subscription = new Subscription();
  selectedPage: string ='/store';

  constructor(public itemService: ItemService, private router: Router) {
  }

  ngOnInit() {
    this.cartUpdateSubscription = this.itemService.cartUpdated$.subscribe(() => {
      this.updateTotal();
    });
  }

  ngOnDestroy() {
    this.cartUpdateSubscription.unsubscribe();
  }

  updateTotal() {
    this.total = this.itemService.calculateTotal();
  }

  toggleRouting() {
    this.router.navigateByUrl(this.selectedPage);
  }


}
