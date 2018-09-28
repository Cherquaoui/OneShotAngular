import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SpinnerService} from './spinner.service';

@Injectable()
export class AuthGuard implements HttpInterceptor {

  constructor(private auth: AuthenticationService,
              private router: Router,
              private spinnerService: SpinnerService) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.spinTrue();
    console.log('interception de la requete!!!');

    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': this.auth.getToken()
      }
    });


    return next.handle(req).pipe(tap(event => {

    },error=>{
      console.log("erreur!!!!!!!!!!!!!!!!!!!!!");
      this.router.navigate(['login']);
      console.log(error.status);
      this.spinnerService.spinFalse()

    },()=>{
      console.log("complete!!!!");
      this.spinnerService.spinFalse();
    }))


  }


}
