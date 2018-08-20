import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GoService} from '../../go.service';
import {Go} from '../../entities/Go';

@Component({
  selector: 'app-modifier-go',
  templateUrl: './modifier-go.component.html',
  styleUrls: ['./modifier-go.component.css']
})
export class ModifierGoComponent implements OnInit {

  monGo:Go = new Go();
  codeSite="initial";

  constructor(public activatedRoute:ActivatedRoute,
              private go:GoService,
              private router:Router) {


  }

  ngOnInit() {
    this.go.getGoByCodeSite(this.activatedRoute.snapshot.params['codeSite']).subscribe(data=>{
      this.monGo=data;
      data.codeSite=this.activatedRoute.snapshot.params['codeSite'];

    }  )


  }
  envoyer(){
    this.go.updateGo(this.monGo).subscribe(data=>console.log(data));
    this.router.navigate(['/go']);
  }
  retour(){
    this.router.navigate(['/go']);
  }

}
