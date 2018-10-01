import {Injectable} from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {OneShot} from '../entities/composition/OneShot';

@Injectable()
export class OneshotService {

  constructor(private http: HttpClient,
              private authentication: AuthenticationService) {
  }

  getOneShotByCodeSite(codeSite: string) {
    return this.http.get(this.authentication.getUrl()+'/oneshot/'+codeSite)
  }
}
