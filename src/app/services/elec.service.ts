import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {ElecTrav} from "../entities/ElecTrav";
import {ElecSuivi} from "../entities/ElecSuivi";
import {AuthenticationService} from "./authentication.service";

@Injectable()

export class ElecService {

  private  url = 'https://one-shot-app.herokuapp.com';

  constructor(private http:HttpClient,
              private authentication:AuthenticationService) { }

  getElecSuivi(codeSite:string){
    return this.http.get<ElecSuivi>(this.url+'/elec/'+codeSite,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}})
  }

  updateElecSuivi(elec){
    return this.http.put(this.url+'/elec/'+elec.codeSite,elec,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}})
  }

  getElecTrav(codeSite:string){
    return this.http.get<ElecTrav>(this.url+'/elec/trav/'+codeSite, {headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}});
  }

  updateElecTrav(elecTrav){
    return this.http.put(this.url+'/elec/trav/'+elecTrav.codeSite,elecTrav,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.token}})
  }
}
