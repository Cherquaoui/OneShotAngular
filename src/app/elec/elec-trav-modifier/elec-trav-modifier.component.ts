import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ElecService} from "../../services/elec.service";
import {ElecTrav} from "../../entities/ElecTrav";

@Component({
  selector: 'app-elec-trav-modifier',
  templateUrl: './elec-trav-modifier.component.html',
  styleUrls: ['./elec-trav-modifier.component.css']
})
export class ElecTravModifierComponent implements OnInit {

  elecTrav : ElecTrav = new ElecTrav();

  constructor(public activatedRoute:ActivatedRoute,
              private elecService:ElecService,
              private router:Router) { }

  ngOnInit() {
    this.elecService.getElecTrav(this.activatedRoute.snapshot.params['codeSite']).subscribe(data=>{
      this.elecTrav=data;
      this.elecTrav.codeSite=this.activatedRoute.snapshot.params['codeSite'];
      console.log(this.elecTrav)},error1 => {
      console.log(error1);
      this.router.navigate(['/home']);
    })
  }

  modifier(){
    this.elecService.updateElecTrav(this.elecTrav).subscribe(data=>console.log(data))
    this.router.navigate(['/elec']);
  }

  retour(){
    this.router.navigate(['/elec']);
  }

}
