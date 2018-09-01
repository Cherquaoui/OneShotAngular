import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthenticationService {

  private url='https://one-shot-app.herokuapp.com/login';
  public token:string = null;



  constructor(private  http:HttpClient){}

  saveToken(token){
    this.token=token;
  }

  logIn(data){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    };
    return this.http.post(this.url,data,httpOptions);
  }


}
