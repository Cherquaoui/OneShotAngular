import { Component, OnInit } from '@angular/core';
import {GoService} from '../../services/go.service';
import {Go} from '../../entities/Go';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-go',
  templateUrl: './ajouter-go.component.html',
  styleUrls: ['./ajouter-go.component.css']
})
export class AjouterGoComponent implements OnInit {

  constructor(private  service:GoService,
              private router:Router) { }

  ngOnInit() {
  }
  afficher(data:Go){
    console.log(data);


    this.service.saveGo(data).subscribe(data=>console.log(data));
    this.router.navigate(['go']);
  }

}
