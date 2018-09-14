import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {GoService} from '../services/go.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-elec',
  templateUrl: './elec.component.html',
  styleUrls: ['./elec.component.css']
})
export class ElecComponent implements OnInit {

  @ViewChild(MatSort) sort:MatSort

  myControl:FormControl = new FormControl();
  searchResult;
  filtreRegion: string = '';
  filtreTypologie: string = '';
  filtreRecherche: string = '';
  filtreEquipe:string='';
  filtre = false;
  filtreCw="";
  filtreElec="";
  sortHeader="codeSite";
  sortDierction="asc"
  monlength;
  monhidden=false;

  dataSource = new MatTableDataSource();

  length ;

  interval;

  refreshData(page:number,size:number) {
    this.goService.getOneShot(page, size,this.filtreRecherche,this.filtreRegion,this.filtreTypologie,
      this.filtreCw,this.filtreEquipe,this.filtreElec,this.dataSource.sort.active,this.dataSource.sort.direction).
    subscribe(data => {
      this.dataSource.data = data.body["content"];
      this.length = data.body['totalElements'];
    }, error1 => this.router.navigateByUrl('/login'));

  }

  constructor(private goService: GoService,
              private router: Router) {
  }


  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.sort.disableClear=true;
    this.dataSource.sort.direction="asc";
    this.dataSource.sort.active="codeSite";
    this.refreshData(0,15);
    this.filter();
  }


  displayedColumnsDate: string[] = ['codeSite', 'elec.depotDemande',
    'elec.etude', 'elec.devis', 'elec.payementDevis', 'elec.autorisation', 'elec.debutTravaux', 'elec.finTravaux', 'elec.reception',
    'elec.abonnement', 'elec.poseCompteur'];
  displayedColumnsDivers: string[] = ['codeSite', 'dateGo', 'typologie', 'cw.etatCw', 'elec.elecEtat', 'elec.regie',
    'elec.numDossier','elec.poseCompteur'];
  displayedColumnsTrav: string[] = ['codeSite','elec.elecEtat', 'typologie', 'elec.electrav.equipeElec', 'elec.electrav.bta',
    'elec.electrav.bts','elec.electrav.btsrf', 'elec.electrav.btniche','elec.electrav.ok' ,'elec.poseCompteur'];

  displayedColumns: string[] = this.displayedColumnsDivers;



  monClique() {
    this.displayedColumns = this.displayedColumnsDivers;
  }

  monClique1() {
    this.displayedColumns = this.displayedColumnsDate;
  }

  monClique2() {
    this.displayedColumns = this.displayedColumnsTrav;
  }

  modifier(data) {
    console.log(data);
    this.router.navigate(['elec', data]);
  }

  modifierTrav(data) {
    this.router.navigate(['elec/trav', data]);
  }

  page(page: PageEvent) {
    this.refreshData(page.pageIndex,page.pageSize);
}
  filter(){
    this.monhidden=false;
    this.dataSource.sort.sortChange.pipe(debounceTime(150)).subscribe(
      data=>{
        this.monhidden=false
        console.log(this.monhidden)

        this.sortHeader=data.active;
        this.refreshData(0,15);

      }
    )
    setTimeout(()=>{
      this.monhidden=true;
      console.log(this.monhidden);
    },500);

  }
}
