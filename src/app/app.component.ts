import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  isStoreRoute(): boolean {
    return this.router.url === '/store';
  }

  isCartRoute(): boolean {
    return this.router.url === '/cart';
  }
}
