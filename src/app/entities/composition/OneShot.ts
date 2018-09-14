import {cw} from '../cw';
import {Electrification} from './Electrification';

export class OneShot {


  codeSite:string;
  latitude:number;
  longitude:number;
  dateGo:string;
  region:string;
  typologie:string;
  hauteur:number;

  cw?:cw;
  elec?:Electrification;



}
