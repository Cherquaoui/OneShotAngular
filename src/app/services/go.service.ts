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
    console.log("chargement des go");
    return this.http.get<Go[]>(this.authentication.getUrl()+'/go',
      {
       observe: 'response' as 'response'
    });
  }
  getGoByCodeSite(codeSite:string){
    return this.http.get<Go>(this.authentication.getUrl()+'/go/'+codeSite,
      {observe: 'response' as 'response'});
  }

  getOneShot(page,size){
    return this.http.get<OneShot[]>(this.authentication.getUrl()+'/oneshot?page='+page+'&&size='+size,
      {observe: 'response' as 'response'})
  }
  saveGo(go:Go){
    return this.http.post(this.authentication.getUrl()+'/go',go,{observe: 'response' as 'response'});
  }
  updateGo(go:Go){
    return this.http.put(this.authentication.getUrl()+'/go/'+go.codeSite,go,{observe: 'response' as 'response'})
  }



  getCW(){
    return this.http.get<cw[]>(this.authentication.getUrl()+'/cw',{observe: 'response' as 'response'})
  }

  getCwByCodeSite(codeSite:string){
    return this.http.get<cw>(this.authentication.getUrl()+'/cw/'+codeSite,{observe: 'response' as 'response'});
  }

  updateCw(moncw:cw){
    return this.http.put(this.authentication.getUrl()+'/cw/'+moncw.codeSite,moncw,{observe: 'response' as 'response'})
  }

}

