import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthGuard implements HttpInterceptor{

  private token=this.auth.getToken();
  constructor(private auth:AuthenticationService){}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interception de la requete http!");



    if(this.auth.getToken()===null){
      console.log(req)
      console.log("token inexistant")
      return next.handle(req);
    }

    else {
      console.log("Token trouvé!")

      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': this.auth.getToken()
        }
      });
      console.log(req)
      return next.handle(req);
    }

  }

}
