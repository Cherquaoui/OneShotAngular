import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElecService {

  constructor(private http:HttpClient) { }

  getElecSuivi(codeSite:string){
    return this.http.get('http://localhost:8090/elec/'+codeSite)
  }



}
