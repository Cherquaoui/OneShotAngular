import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from './User';
import {SpinnerService} from '../services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private authentication: AuthenticationService,
              private http: HttpClient,
              private router: Router,

              public spinnerService: SpinnerService) {
  }

  ngOnInit() {

  }

  submit(value) {
    this.authentication.logIn(value).subscribe(resp => {
      if (resp.headers.get('Authorization') !== null) {
        this.authentication.saveToken(resp.headers.get('Authorization'));
        this.router.navigateByUrl('/go');
      }
    });
  }
}
