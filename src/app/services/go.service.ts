import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Go} from '../entities/Go';
import {Observable} from 'rxjs';
import {OneShot} from '../entities/composition/OneShot';
import {cw} from '../entities/cw';


@Injectable()
export class GoService {

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

}
