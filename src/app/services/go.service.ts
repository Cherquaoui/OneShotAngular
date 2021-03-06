import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Go} from '../entities/Go';
import {Observable} from 'rxjs';
import {OneShot} from '../entities/composition/OneShot';
import {cw} from '../entities/cw';
import {AuthenticationService} from "./authentication.service";
import {equipe} from "../entities/equipe";


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
  getGoByCodeSite(codeSite){
    return this.http.get<Go>(this.authentication.getUrl()+'/go/'+codeSite,
      {observe: 'response' as 'response'});
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

  getCwByCodeSite(codeSite){
    return this.http.get<cw>(this.authentication.getUrl()+'/cw/'+codeSite,{observe: 'response' as 'response'});
  }

  updateCw(moncw:cw){
    return this.http.put(this.authentication.getUrl()+'/cw/'+moncw.codeSite,moncw,{observe: 'response' as 'response'})
  }

  rechercheGo(page:number,size:number,recherche,
              typologie,region,sortHeader,sortDirection){
    return this.http.get(this.authentication.getUrl()+'/go/recherche?page='+page+'&&size='+size+
      '&&codeSite='+recherche+'&&region='+region+'&&typologie='+typologie+'&&sort='+sortHeader +','+sortDirection,
      {observe: 'response' as 'response'});

  }

  getCodeSite(codesite,region,typologie){
    return this.http.get(this.authentication.getUrl()+'/codesite?codeSite='+codesite+'&&region='+region+'&&typologie='+typologie);
  }

  getEquipe():Observable<equipe[]>{
    return this.http.get<equipe[]>(this.authentication.getUrl()+'/equipe');
  }
  getOneShot(page,size,codeSite,region,typologie,
             etatCw,equipeCw,etatElec,sortHeader,sortDirection){
    return this.http.get<OneShot[]>(this.authentication.getUrl()+
      '/oneshot?page='+page+'&&size='+size+'&&codeSite='+codeSite+
      '&&region='+region+'&&typologie='+typologie+
      '&&etatCw='+etatCw+'&&equipeCw='+equipeCw+
      '&&etatElec='+etatElec+'&&sort='+sortHeader+','+sortDirection,
      {observe: 'response' as 'response'})
  }



}

