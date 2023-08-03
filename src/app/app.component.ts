import { Component, OnInit } from '@angular/core';
import { GrocerService } from './services/grocer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private readonly grocerService: GrocerService,private router: Router) {}
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
  switchPages() {
    
    const currentRoute = this.router.url;
    console.log("switch")
   
    if (currentRoute === '/') {
      this.router.navigate(['/cart']); 
    } else if (currentRoute === '/cart') {
      this.router.navigate(['/']); 
    }
  }

}
