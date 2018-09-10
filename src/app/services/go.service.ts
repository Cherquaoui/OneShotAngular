import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Go} from '../entities/Go';
import {cw} from '../entities/cw';
import {AuthenticationService} from './authentication.service';
import {map} from 'rxjs/operators';


@Injectable()
export class GoService {

  constructor(private http: HttpClient,
              private authentication: AuthenticationService) {
  }

  rechercheGo(mc,index,size,typologie,region){
    return this.http.get(this.authentication.getUrl()+'/go/recherche?codeSite='+mc
      +'&&index='+index+'&&size='+size+'&&typologie='+typologie+'&&region='+region,{
      observe: 'response' as 'response'
    });
  }

  rechercheOneShot(){
    return
  }

  getCodeSite(code:string){
    return this.http.get(this.authentication.getUrl()+'/codesite?code='+code,{
      observe: 'response' as 'response'
    })
  }


  getGo(index,size) {
    console.log('chargement des go');
    if (index == null &&size==null) {
      index = 0;
      size=10;
    }
    return this.http.get(this.authentication.getUrl() + '/go?index=' + index+'&&size='+size, {
      observe: 'response' as 'response'
    });
  }

  getGoByCodeSite(codeSite: string) {
    return this.http.get<Go>(this.authentication.getUrl() + '/go/' + codeSite, {observe: 'response' as 'response'});
  }

  getOneShot(page: number) {
    if (page == null) {
      page = 0;
    }
    return this.http.get(this.authentication.getUrl() + '/oneshot?page=' + page, {observe: 'response' as 'response'});
  }

  saveGo(go: Go) {
    return this.http.post(this.authentication.getUrl() + '/go', go, {observe: 'response' as 'response'});
  }

  updateGo(go: Go) {
    return this.http.put(this.authentication.getUrl() + '/go/' + go.codeSite, go, {observe: 'response' as 'response'});
  }


  getCW() {
    return this.http.get<cw[]>(this.authentication.getUrl() + '/cw', {observe: 'response' as 'response'});
  }

  getCwByCodeSite(codeSite: string) {
    return this.http.get<cw>(this.authentication.getUrl() + '/cw/' + codeSite, {observe: 'response' as 'response'});
  }

  updateCw(moncw: cw) {
    return this.http.put(this.authentication.getUrl() + '/cw/' + moncw.codeSite, moncw, {observe: 'response' as 'response'});
  }

}

