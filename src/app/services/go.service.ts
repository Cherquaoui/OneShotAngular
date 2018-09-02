import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Go} from '../entities/Go';
import {Observable} from 'rxjs';
import {OneShot} from '../entities/composition/OneShot';
import {cw} from '../entities/cw';
import {AuthenticationService} from "./authentication.service";


@Injectable()


export class GoService {

  constructor(private http:HttpClient,
              private authentication:AuthenticationService) { }


  url = 'https://one-shot-app.herokuapp.com';




  getGo(){
    return this.http.get(this.url+'/go',{
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'authorization': this.authentication.token }),
      observe: 'response' as 'response'
    });
  }
  getGoByCodeSite(codeSite:string){
    return this.http.get<Go>(this.url+'/go/'+codeSite,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}});
  }

  getOneShot():Observable<OneShot[]>{
    return this.http.get<OneShot[]>(this.url+'/oneshot',{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}})
  }
  saveGo(go:Go){
    return this.http.post(this.url+'/go',go,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}});
  }
  updateGo(go:Go){
    return this.http.put(this.url+'/go/'+go.codeSite,go,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}})
  }



  getCW(){
    return this.http.get<cw[]>(this.url+'/cw',{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}})
  }

  getCwByCodeSite(codeSite:string){
    return this.http.get<cw>(this.url+'/cw/'+codeSite,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}});
  }

  updateCw(moncw:cw){
    return this.http.put(this.url+'/cw/'+moncw.codeSite,moncw,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}})
  }

}

