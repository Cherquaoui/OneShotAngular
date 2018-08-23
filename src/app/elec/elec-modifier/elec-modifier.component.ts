import { Component, OnInit } from '@angular/core';
import {ElecSuivi} from '../../entities/ElecSuivi';
import {ActivatedRoute, Router} from '@angular/router';
import {ElecService} from '../../services/elec.service';

@Component({
  selector: 'app-elec-modifier',
  templateUrl: './elec-modifier.component.html',
  styleUrls: ['./elec-modifier.component.css']
})
export class ElecModifierComponent implements OnInit {

  elecSuivi:ElecSuivi = new ElecSuivi();

  constructor(public activatedRoute:ActivatedRoute,
              private elecService:ElecService,
              private router:Router) { }

  ngOnInit() {
    this.elecService.getElecSuivi(this.activatedRoute.snapshot.params['codeSite']).subscribe(data=>{
      this.elecSuivi=data;
      data.codeSite=this.activatedRoute.snapshot.params['codeSite'];
      console.log(this.elecSuivi)

    }  )
  }

}
