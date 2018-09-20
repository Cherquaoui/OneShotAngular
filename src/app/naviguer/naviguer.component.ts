import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-naviguer',
  templateUrl: './naviguer.component.html',
  styleUrls: ['./naviguer.component.css']
})
export class NaviguerComponent implements OnInit {

  codeSite: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.codeSite = this.activatedRoute.snapshot.params['codeSite'];
  }

  navigerGo() {
    this.router.navigateByUrl('/go/'+this.codeSite)

  }
  navigerCw() {
    this.router.navigateByUrl('/cw/'+this.codeSite)

  }
  navigerElec() {
    this.router.navigateByUrl('/elec/'+this.codeSite)

  }
  navigerElecTrav() {
    this.router.navigateByUrl('/elec/trav/'+this.codeSite)

  }

  ngOnInit() {
  }

}
