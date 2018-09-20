import {AfterViewInit, Component, OnInit} from '@angular/core';
import {cw} from '../../entities/cw';
import {ActivatedRoute, Router} from '@angular/router';
import {GoService} from '../../services/go.service';
import {equipe} from '../../entities/equipe';
import {cwupdate} from '../../entities/cwupdate';

@Component({
  selector: 'app-cw-modifier',
  templateUrl: './cw-modifier.component.html',
  styleUrls: ['./cw-modifier.component.css']
})
export class CwModifierComponent implements OnInit,AfterViewInit {
  loaded=false;


  ngAfterViewInit(){

}


  moncw: cw = new cw();
  monequipeCw: equipe;


  listeEquipe: equipe[];

  constructor(public activatedRoute: ActivatedRoute,
              private go: GoService,
              private router: Router) {
  }

  ngOnInit() {
    this.go.getCwByCodeSite(this.activatedRoute.snapshot.params['codeSite']).subscribe(data => {
      this.moncw = data.body;
      this.monequipeCw = this.moncw.equipeCw;
      console.log(data.body);
      data.body.codeSite = this.activatedRoute.snapshot.params['codeSite'];
    }, error1 => this.router.navigateByUrl('/login'),()=>this.loaded=true);

    this.go.getEquipe().subscribe(data => this.listeEquipe = data);

  }

  envoyer() {
    this.go.updateCw(this.moncw).subscribe(data => console.log(data.body));
    setTimeout(this.router.navigate(['/cw']), 500);
  }

  retour() {
    this.router.navigate(['/cw']);
  }

  click(event) {
    console.log(event);
    console.log(this.monequipeCw);
  }


}
