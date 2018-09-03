import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
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
  }

  submit(value){
    this.authentication.logIn(value).
    subscribe(resp=>{

    console.log(resp.headers.get('Authorization'));
    console.log(resp.status);

    if(resp.headers.get('Authorization')!==null){
      this.authentication.saveToken( resp.headers.get('Authorization'));

      this.router.navigateByUrl('/go');
    } else{
      console.log("username or password incorrect")
      this.user.password="";
    }

    })
  }

}
