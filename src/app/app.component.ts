import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router,Event} from '@angular/router';
import {AuthenticationService} from "./services/authentication.service";
import {SpinnerService} from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,
              public authentication: AuthenticationService,
              public spinnerService:SpinnerService) {


  }

  logOut(){
    this.authentication.logOut();
  }


}
