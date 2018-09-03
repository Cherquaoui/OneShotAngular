import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  private url = 'https://one-shot-app.herokuapp.com/login';
  private token: string = null;

  private isLog = false;


  constructor(private  http: HttpClient,
              private router: Router) {
  }

  saveToken(token) {
    this.token = token;
    this.isLog = true;
  }

  logIn(data) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response' as 'response'
    };
    return this.http.post(this.url, data, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response' as 'response'
    });
  }

  getToken(){
    return this.token;
  }
  getIsLog(){
    return this.isLog;
  }

  logOut() {
    this.token = null;
    this.router.navigateByUrl('/login');
    this.isLog = false;
  }


}
