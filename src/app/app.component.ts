import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dms-ui';
  ltDTOs: any;
  isShowing: boolean = false;
  currentRoute: string;
  locale: string = "";


  constructor(private router: Router,
    location: Location) {
    this.currentRoute = location.path();
  }

  navigate(url: string) {
    this.router.navigate([url]);
    this.isShowing = !this.isShowing;
    console.log(this.isShowing);
  }
}
