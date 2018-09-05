import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Go} from '../entities/Go';
import {cw} from '../entities/cw';
import {AuthenticationService} from "./authentication.service";



@Injectable()


export class GoService {

  constructor(private http:HttpClient,
              private authentication:AuthenticationService) { }


  getGo(page){

    console.log("chargement des go");
    if(page==null){page=0}

    return this.http.get(this.authentication.getUrl()+'/go?page='+page,{

      observe: 'response' as 'response'
    });
  }
  getGoByCodeSite(codeSite:string){
    return this.http.get<Go>(this.authentication.getUrl()+'/go/'+codeSite,{observe: 'response' as 'response'});
  }

  getOneShot(page:number){
    if(page==null){page=0}
    return this.http.get(this.authentication.getUrl()+'/oneshot?page='+page,{observe: 'response' as 'response'})
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

