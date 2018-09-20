import {Injectable} from '@angular/core';

@Injectable()
export class SpinnerService {
  private spin=false;

  public spinTrue(){
    setTimeout(this.spin=true)
  }
  public spinFalse(){
    setTimeout(this.spin=false)
}
  public getSpin(){
    return this.spin
  }

}
