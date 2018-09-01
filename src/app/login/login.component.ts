import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {getResponseURL} from "../../../node_modules/@angular/http/src/http_utils";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentication:AuthenticationService,
              private http:HttpClient) { }

  ngOnInit() {
  }

  submit(value){
    this.authentication.logIn(value).
    subscribe(resp=>{console.log(resp);
    console.log(resp.headers.get('Authorization'))
    })
  }

}
