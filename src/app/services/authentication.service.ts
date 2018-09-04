import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
/*
  private url = 'https://one-shot-app.herokuapp.com';*/
  private  url = 'http://localhost:8090';
  private token: string = null;

  private isLog = false;

  getUrl(){
    return this.url;
  }


  constructor(private  http: HttpClient,
              private router: Router) {
  }

  saveToken(token) {
    this.token = token;
    this.isLog = true;
  }

  logIn(data) {
    return this.http.post(this.url+'/login', data, {

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
