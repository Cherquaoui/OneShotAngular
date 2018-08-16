import {cw} from '../cw';
import {Electrification} from './Electrification';

export class OneShot {
  codeSite:String;
  latitude:number;
  longitude:number;
  dateGo:string;
  region:string;
  typologie:string;

  cw?:cw;
  electrification?:Electrification;



}
