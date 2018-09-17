import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GoService} from '../../services/go.service';
import {Go} from '../../entities/Go';
import {throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-modifier-go',
  templateUrl: './modifier-go.component.html',
  styleUrls: ['./modifier-go.component.css']
})
export class ModifierGoComponent implements OnInit {

  monGo: Go = new Go();
  codeSite = 'initial';

  constructor(public activatedRoute: ActivatedRoute,
              private go: GoService,
              private router: Router) {


  }

  ngOnInit() {
    this.go.getGoByCodeSite(this.activatedRoute.snapshot.params['codeSite']).subscribe(data => {
      this.monGo = data.body;
      this.monGo.codeSite = this.activatedRoute.snapshot.params['codeSite'];
    }, error1 => this.router.navigateByUrl('/login'));
  }

  envoyer() {
    this.go.updateGo(this.monGo).subscribe(data => console.log(data));
    setTimeout(() => {
      this.router.navigate(['/go']);
    }, 1000);

  }

  retour() {
    setTimeout(() => {
      this.router.navigate(['/go']);
    }, 1000);
    this.router.navigate(['/go']);
  }

}
