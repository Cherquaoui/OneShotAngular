import { Component, OnInit } from '@angular/core';
import {OneshotService} from '../services/oneshot.service';
import {OneShot} from '../entities/composition/OneShot';
import {GoService} from '../services/go.service';
import {FiltresService} from '../services/filtres.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private goService:GoService,
              public filtreService:FiltresService,
              private router:Router) { }


  sites:OneShot[] = [];

  refreshData(){
    this.goService.getOneShot(0,1000,"",this.filtreService.mapFiltreRegion,
      this.filtreService.mapFiltreTypologie,
      this.filtreService.mapFiltreCw
      ,this.filtreService.mapFiltreEquipe,this.filtreService.mapFiltreElec,
      "codeSite","asc").subscribe(data=>{
      this.sites=data.body['content']

    });

}
versSite(data){
    console.log("data : "+data);
    this.router.navigate(['go',data])
}

  refresh(){
    this.filtreService.mapRefresh()
  }
  ngOnInit() {
    this.refresh();
  this.refreshData();



  }


}
