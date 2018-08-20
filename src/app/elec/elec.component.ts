import {Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {GoService} from '../go.service';

@Component({
  selector: 'app-elec',
  templateUrl: './elec.component.html',
  styleUrls: ['./elec.component.css']
})
export class ElecComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  elec:electrification2[]=[];


  constructor(private goService:GoService) { }

  afficher(data){
    console.log(data)
  }

  ngOnInit() {
    this.goService.getOneShot().subscribe(data=>{
        for(let monsite of data){
          if(monsite.cw!==null){
          let elect = new electrification2(monsite.codeSite.toString(),monsite.dateGo,monsite.typologie,monsite.cw.etatCw,
            monsite.electrification.elecEtat,monsite.electrification.regie,monsite.electrification.depotDemande,monsite.electrification.etude,monsite.electrification.devis,
            monsite.electrification.payementDevis,monsite.electrification.autorisation,monsite.electrification.debutTravaux,monsite.electrification.finTravaux,
            monsite.electrification.reception,monsite.electrification.poseCompteur,monsite.electrification.elecTrav.btA,monsite.electrification.elecTrav.btS,
            monsite.electrification.elecTrav.btSRf,monsite.electrification.elecTrav.btNiche,monsite.electrification.elecTrav.ok);
          this.elec.push(elect);
        }}
        this.dataSource.data=this.elec;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      }
    );
  }



  displayedColumnsDate:string[] = ['codeSite', 'depotDemande',
    'etude','devis','payementDevis','autorisation','debutTravaux','finTravaux','reception',
    'abonnement','poseCompteur'];
  displayedColumnsDivers:string[] = ['codeSite','dateGo','typologie','etatCw','elecEtat','regie','nDossier',
    'ok','poseCompteur'];
  displayedColumnsTrav:string[] = ['codeSite','typologie','bta','bts','btsrf','btniche',
    'ok','poseCompteur'];

  displayedColumns: string[] = this.displayedColumnsDivers;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  monClique(){this.displayedColumns=this.displayedColumnsDivers}
  monClique1(){this.displayedColumns=this.displayedColumnsDate}
  monClique2(){this.displayedColumns=this.displayedColumnsTrav}



}

export class electrification2{


  constructor(codeSite: string, dateGo: string, typologie: string, etatCw: string, elecEtat: string, regie: string,
              depotDemande: string, etude: string, devis: string, payementDevis: string, autorisation: string, debutTravaux:
                string, finTravaux: string, reception: string, poseCompteur: string, btA: number, btS: number, btSRf: number, btNiche: number, ok: number) {
    this.codeSite = codeSite;
    this.dateGo = dateGo;
    this.typologie = typologie;
    this.etatCw = etatCw;
    this.elecEtat = elecEtat;
    this.regie = regie;
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
    this.ok = ok;
  }

  codeSite : string;
  dateGo:string;
  typologie:string;
  etatCw:string;
  elecEtat:string;
  regie : string;
  depotDemande : string;
  etude : string;
  devis : string;
  payementDevis : string;
  autorisation : string;
  debutTravaux : string;
  finTravaux : string;
  reception : string;
  poseCompteur : string;
  btA : number;
  btS : number;
  btSRf : number;
  btNiche : number;
  ok : number;
}
