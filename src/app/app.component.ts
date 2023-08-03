import { Component, OnInit} from '@angular/core';
import { GrocersService } from 'src/grocers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GrocersService],
})
export class AppComponent {
  title = 'angular-green-grocers';
}
