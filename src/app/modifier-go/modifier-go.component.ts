import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GoService} from '../go.service';
import {Go} from '../entities/Go';

@Component({
  selector: 'app-modifier-go',
  templateUrl: './modifier-go.component.html',
  styleUrls: ['./modifier-go.component.css']
})
export class ModifierGoComponent implements OnInit {

  monGo:Go = new Go();
  codeSite;

  constructor(public activatedRoute:ActivatedRoute,private go:GoService) {
    console.log(this.activatedRoute.snapshot.params['codeSite'])

  }

  ngOnInit() {
    this.go.getGoByCodeSite(this.activatedRoute.snapshot.params['codeSite']).subscribe(data=>this.monGo=data);

  }
  envoyer(){
    this.go.updateGo(this.monGo).subscribe(data=>console.log(data));
  }

}
