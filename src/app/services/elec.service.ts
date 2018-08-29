import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {ElecTrav} from "../entities/ElecTrav";
import {ElecSuivi} from "../entities/ElecSuivi";

@Injectable({
  providedIn: 'root'
})
/*export class ElecService {

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



}*/
export class ElecService {

  constructor(private http:HttpClient) { }

  getElecSuivi(codeSite:string){
    return this.http.get<ElecSuivi>('http://localhost:8090/elec/'+codeSite)
  }

  updateElecSuivi(elec){
    return this.http.put('http://localhost:8090/elec/'+elec.codeSite,elec)
  }

  getElecTrav(codeSite:string){
    return this.http.get<ElecTrav>('http://localhost:8090/elec/trav/'+codeSite);
  }

  updateElecTrav(elecTrav){
    return this.http.put('http://localhost:8090/elec/trav/'+elecTrav.codeSite,elecTrav)
  }
}
