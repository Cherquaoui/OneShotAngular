import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Go} from './entities/Go';
import {Observable} from 'rxjs';
import {OneShot} from './entities/composition/OneShot';
import {ElecSuivi} from './entities/ElecSuivi';
import {cw} from './entities/cw';


@Injectable()
export class GoService {

  constructor(private http:HttpClient) { }

  getGo(): Observable<Go[]>{
    return this.http.get<Go[]>('http://localhost:8090/go');
  }
  getGoByCodeSite(codeSite:string){
    return this.http.get<Go>('http://localhost:8090/go/'+codeSite);
  }

  getOneShot():Observable<OneShot[]>{
    return this.http.get<OneShot[]>('http://localhost:8090/oneshot')
}
  saveGo(go:Go){
    return this.http.post('http://localhost:8090/go',go);
  }
  updateGo(go:Go){
    return this.http.put('http://localhost:8090/go/'+go.codeSite,go)
  }

  getElecSuivi(){
    return this.http.get<ElecSuivi[]>('http://localhost:8090/elec')
  }

  getCW(){
    return this.http.get<cw[]>('http://localhost:8090/cw')
  }

  getCwByCodeSite(codeSite:string){
    return this.http.get<cw>('http://localhost:8090/cw/'+codeSite);
  }

  updateCw(moncw:cw){
    return this.http.put('http://localhost:8090/cw/'+moncw.codeSite,moncw)
  }

}
