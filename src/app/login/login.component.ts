import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {getResponseURL} from "../../../node_modules/@angular/http/src/http_utils";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "./User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private authentication:AuthenticationService,
              private http:HttpClient,
              private router:Router) { }

  ngOnInit() {
    this.authentication.token=null;
  }

  submit(value){
    this.authentication.logIn(value).
    subscribe(resp=>{

    console.log(resp.headers.get('Authorization'));
    console.log(resp.status);
    this.authentication.token = resp.headers.get('Authorization');
    if(resp.status==200){
      this.authentication.isLog=true;
      this.router.navigateByUrl('/cw');
    } else{
      console.log("username or password incorrect")
      this.user.password="";
    }

    })
  }

}
