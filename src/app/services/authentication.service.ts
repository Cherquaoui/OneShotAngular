import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs";


@Injectable()
export class AuthenticationService {

  private url='https://one-shot-app.herokuapp.com/login';
  public token:string = null;


  private tokenSubject:Subject<string>=new Subject<string>();




  public isLog=false;



  constructor(private  http:HttpClient,
              private router:Router){
    this.tokenSubject.subscribe(data=>console.log(data))
  }

  saveToken(token){
    this.token=token;
  }

  logIn(data){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    };
    return this.http.post(this.url,data,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    });
  }

  logOut(){
    this.token=null;
    this.router.navigateByUrl('/login');
    this.isLog=false;
  }


}
