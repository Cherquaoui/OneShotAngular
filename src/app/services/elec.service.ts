import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {ElecTrav} from "../entities/ElecTrav";
import {ElecSuivi} from "../entities/ElecSuivi";
import {AuthenticationService} from "./authentication.service";

@Injectable()

export class ElecService {


  constructor(private http:HttpClient,
              private authentication:AuthenticationService) { }

  getElecSuivi(codeSite:string){
    return this.http.get<ElecSuivi>(this.authentication.getUrl()+'/elec/'+codeSite,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}})
  }

  updateElecSuivi(elec){
    return this.http.put(this.authentication.getUrl()+'/elec/'+elec.codeSite,elec,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}})
  }

  getElecTrav(codeSite:string){
    return this.http.get<ElecTrav>(this.authentication.getUrl()+'/elec/trav/'+codeSite, {headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}});
  }

  updateElecTrav(elecTrav){
    return this.http.put(this.authentication.getUrl()+'/elec/trav/'+elecTrav.codeSite,elecTrav,{headers:{'content-type': 'application/json',
        'authorization': this.authentication.getToken()}})
  }
}
