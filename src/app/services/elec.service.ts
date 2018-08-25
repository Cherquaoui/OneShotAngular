import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {ElecTrav} from "../entities/ElecTrav";
import {ElecSuivi} from "../entities/ElecSuivi";

@Injectable({
  providedIn: 'root'
})
export class ElecService {

  constructor(private http:HttpClient) { }

  getElecSuivi(codeSite:string){
    return this.http.get<ElecSuivi>('https://one-shot-app.herokuapp.com/elec/'+codeSite)
  }

  updateElecSuivi(elec){
    return this.http.put('https://one-shot-app.herokuapp.com/elec/'+elec.codeSite,elec)
  }

  getElecTrav(codeSite:string){
    return this.http.get<ElecTrav>('https://one-shot-app.herokuapp.com/elec/trav/'+codeSite);
  }

  updateElecTrav(elecTrav){
    return this.http.put('https://one-shot-app.herokuapp.com/elec/trav/'+elecTrav.codeSite,elecTrav)
  }



}
