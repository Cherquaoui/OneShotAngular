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


  getGo(){
    return this.http.get<Go[]>(this.authentication.getUrl()+'/go',{
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'authorization': this.authentication.getToken() })
    });
  }
  getGoByCodeSite(codeSite:string){
    return this.http.get<Go>(this.authentication.getUrl()+'/go/'+codeSite,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}});
  }

  getOneShot():Observable<OneShot[]>{
    return this.http.get<OneShot[]>(this.authentication.getUrl()+'/oneshot',{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}})
  }
  saveGo(go:Go){
    return this.http.post(this.authentication.getUrl()+'/go',go,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}});
  }
  updateGo(go:Go){
    return this.http.put(this.authentication.getUrl()+'/go/'+go.codeSite,go,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}})
  }



  getCW(){
    return this.http.get<cw[]>(this.authentication.getUrl()+'/cw',{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}})
  }

  getCwByCodeSite(codeSite:string){
    return this.http.get<cw>(this.authentication.getUrl()+'/cw/'+codeSite,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}});
  }

  updateCw(moncw:cw){
    return this.http.put(this.authentication.getUrl()+'/cw/'+moncw.codeSite,moncw,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}})
  }

}

