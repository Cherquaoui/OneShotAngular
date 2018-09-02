import {Component, OnInit} from '@angular/core';
import {cw} from '../../entities/cw';
import {ActivatedRoute, Router} from '@angular/router';
import {GoService} from '../../services/go.service';

@Component({
  selector: 'app-cw-modifier',
  templateUrl: './cw-modifier.component.html',
  styleUrls: ['./cw-modifier.component.css']
})
export class CwModifierComponent implements OnInit {

  cw: cw = new cw();

  constructor(public activatedRoute: ActivatedRoute,
              private go: GoService,
              private router: Router) {
  }

  ngOnInit() {
    this.go.getCwByCodeSite(this.activatedRoute.snapshot.params['codeSite']).subscribe(data => {
      this.cw = data;
      console.log(data);
      data.codeSite = this.activatedRoute.snapshot.params['codeSite'];

    },error1 => this.router.navigateByUrl('/login'));

  }
  envoyer(){
    this.go.updateCw(this.cw).subscribe(data=>console.log(data));
    this.router.navigate(['/cw']);

  }

  retour(){
    this.router.navigate(['/cw']);
  }
}
