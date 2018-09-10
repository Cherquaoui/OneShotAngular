import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {GoService} from '../services/go.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-elec',
  templateUrl: './elec.component.html',
  styleUrls: ['./elec.component.css']
})
export class ElecComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  elec: electrification2[] = [];
  length = 0;

  interval;

  refreshData(data) {
    this.goService.getOneShot(data).subscribe(data => {

      this.dataSource.data = data.body["content"];


      this.length = data.body['totalElements'];

      console.log(this.length);
    }, error1 => this.router.navigateByUrl('/login'));

    clearInterval(this.interval);

  }

  constructor(private goService: GoService,
              private router: Router) {
  }


  ngOnInit() {

    this.refreshData(0);


  }


  displayedColumnsDate: string[] = ['codeSite', 'depotDemande',
    'etude', 'devis', 'payementDevis', 'autorisation', 'debutTravaux', 'finTravaux', 'reception',
    'abonnement', 'poseCompteur'];
  displayedColumnsDivers: string[] = ['codeSite', 'dateGo', 'typologie', 'etatCw', 'elecEtat', 'regie', 'ndossier',
    'poseCompteur'];
  displayedColumnsTrav: string[] = ['codeSite', 'typologie', 'equipeElec', 'bta', 'bts', 'btsrf', 'btniche', 'poseCompteur'];

  displayedColumns: string[] = this.displayedColumnsDivers;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

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
    this.elec = [];
    this.goService.getOneShot(page.pageIndex).subscribe(data => {


      this.dataSource = new MatTableDataSource(this.elec);
      this.dataSource.sort = this.sort;
      this.dataSource['pageIndex'] = page.pageIndex;
    }, error1 => this.router.navigateByUrl('/login'));


  }


}

export class electrification2 {


  constructor(codeSite: string, dateGo: string, typologie: string, etatCw: string, elecEtat: string, regie: string, ndossier: number,
              depotDemande: string, etude: string, devis: string, payementDevis: string, autorisation: string, debutTravaux:
                string, finTravaux: string, reception: string, poseCompteur: string, btA: number, btS: number, btSRf: number, btNiche: number, equipeElec: string) {

    this.codeSite = codeSite;
    this.dateGo = dateGo;
    this.typologie = typologie;
    this.etatCw = etatCw;
    this.elecEtat = elecEtat;
    this.regie = regie;
    this.ndossier = ndossier;
    this.depotDemande = depotDemande;
    this.etude = etude;
    this.devis = devis;
    this.payementDevis = payementDevis;
    this.autorisation = autorisation;
    this.debutTravaux = debutTravaux;
    this.finTravaux = finTravaux;
    this.reception = reception;
    this.poseCompteur = poseCompteur;
    this.btA = btA;
    this.btS = btS;
    this.btSRf = btSRf;
    this.btNiche = btNiche;
    this.equipeElec = equipeElec;
  }

  codeSite: string;
  dateGo: string;
  typologie: string;
  etatCw: string;
  elecEtat: string;
  regie: string;
  ndossier: number;
  depotDemande: string;
  etude: string;
  devis: string;
  payementDevis: string;
  autorisation: string;
  debutTravaux: string;
  finTravaux: string;
  reception: string;
  poseCompteur: string;
  btA: number;
  btS: number;
  btSRf: number;
  btNiche: number;
  equipeElec: string;
}
