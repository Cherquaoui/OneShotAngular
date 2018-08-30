import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Go} from '../entities/Go';
import {Observable, throwError} from 'rxjs';
import {OneShot} from '../entities/composition/OneShot';
import {cw} from '../entities/cw';
import {catchError} from 'rxjs/operators';

@Injectable()
/*export class GoService {

  constructor(private http:HttpClient) { }

  getGo(): Observable<Go[]>{
    return this.http.get<Go[]>('https://one-shot-app.herokuapp.com/go');
  }
  getGoByCodeSite(codeSite:string){
    return this.http.get<Go>('https://one-shot-app.herokuapp.com/go/'+codeSite);
  }

  getOneShot():Observable<OneShot[]>{
    return this.http.get<OneShot[]>('https://one-shot-app.herokuapp.com/oneshot')
}
  saveGo(go:Go){
    return this.http.post('https://one-shot-app.herokuapp.com/go',go);
  }
  updateGo(go:Go){
    return this.http.put('https://one-shot-app.herokuapp.com/go/'+go.codeSite,go)
  }



  getCW(){
    return this.http.get<cw[]>('https://one-shot-app.herokuapp.com/cw')
  }

  getCwByCodeSite(codeSite:string){
    return this.http.get<cw>('https://one-shot-app.herokuapp.com/cw/'+codeSite);
  }

  updateCw(moncw:cw){
    return this.http.put('https://one-shot-app.herokuapp.com/cw/'+moncw.codeSite,moncw)
  }

}*/


export class GoService {

  constructor(private http:HttpClient) { }

  getGo(): Observable<Go[]>{
    return this.http.get<Go[]>('http://localhost:8090/go').pipe(
      catchError(this.handleError));
  }
  getGoByCodeSite(codeSite:string){
    return this.http.get<Go>('http://localhost:8090/go/'+codeSite);
  }

  getOneShot():Observable<OneShot[]>{
    return this.http.get<OneShot[]>('http://localhost:8090/oneshot')
  }
  saveGo(go:Go){
    return this.http.post('http://localhost:8090/go',go);
  }
  updateGo(go:Go){
    return this.http.put('http://localhost:8090/go/'+go.codeSite,go)
  }



  getCW(){
    return this.http.get<cw[]>('http://localhost:8090.com/cw')
  }

  getCwByCodeSite(codeSite:string){
    return this.http.get<cw>('http://localhost:8090/cw/'+codeSite);
  }

  updateCw(moncw:cw){
    return this.http.put('http://localhost:8090/cw/'+moncw.codeSite,moncw)
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}

