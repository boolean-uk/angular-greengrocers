import { Component, OnInit } from '@angular/core';
import { GrocerService } from './services/grocer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private readonly grocerService: GrocerService) {}
  fruit$ = this.grocerService.fruit$;
  async ngOnInit() {}
  title = 'angular-green-grocers';
  // obj = {
  //   name: 'bla',
  //   title: 'apple',
  // };
  addFruit() {
    // add a fruit to the list
    // this.somethingService.refreshFruit$.next();
  }

  refresh() {
    console.log('ive been clicked');
    this.grocerService.refreshFruit$.next('apple');
  }

}
