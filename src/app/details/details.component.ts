import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OneshotService} from '../services/oneshot.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private oneShotService:OneshotService,
              private router:Router) { }

  site;
  codeSite:string="";

  ngOnInit() {
    this.oneShotService.getOneShotByCodeSite(this.activatedRoute.snapshot.params['codeSite']).
      subscribe(data=>{
        this.site=data;
        this.codeSite=this.site.codeSite;

    })
  }

  modifierGo(){
    this.router.navigate(['go',this.codeSite])
  }
  modifierGC(){
    this.router.navigate(['cw',this.codeSite])
  }
  modifierElec(){
    this.router.navigate(['elec',this.codeSite])
  }
  modifierElecTrav(){
    this.router.navigate(['elec/trav',this.codeSite])
  }


}
