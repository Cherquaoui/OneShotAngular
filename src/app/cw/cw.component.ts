import {Component, OnInit, ViewChild} from '@angular/core';
import {map, startWith} from 'rxjs/internal/operators';
import {FormControl} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs';
import {GoService} from '../go.service';
import {OneShot} from '../entities/composition/OneShot';

@Component({
  selector: 'app-cw',
  templateUrl: './cw.component.html',
  styleUrls: ['./cw.component.css']
})
export class CwComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  site;
  codeSites = [];
  cwObject:CwObject[] = [];

  constructor(private goService:GoService) { }
  afficher(data){
    console.log(data)
  }
  dataSource = new MatTableDataSource();
  ngOnInit() {
    this.goService.getOneShot().subscribe(data =>{

      for(let monsite of data){
        if(monsite.cw !=null){
          let cw = new CwObject( monsite.codeSite.toString(),monsite.dateGo,monsite.typologie,
            monsite.cw.etatCw,monsite.electrification.elecEtat,monsite.cw.ouverture,monsite.cw.fouilles,
            monsite.cw.coulage,monsite.cw.montage,monsite.cw.finCw,monsite.electrification.poseCompteur);
          this.cwObject.push(cw);
          console.log(monsite.cw.etatCw)
        }
      }
        this.dataSource.data=this.cwObject;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    );
  }

  displayedColumns: string[] = ['codeSite','ouverture','fouilles',
                                  'coulage','montage','finCw'];
  displayedColumns1: string[] = ['codeSite','ouverture','fouilles',
    'coulage','montage','finCw'];
  displayedColumns2: string[] = ['codeSite','dateGo','typologie','etatCw','elecEtat'];
  monClique(){
    this.displayedColumns=this.displayedColumns1;
  }
  monClique2(){
    this.displayedColumns=this.displayedColumns2;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}

class CwObject{

  constructor(codeSite: string, dateGo: string, typologie: string,  etatCw: string, elecEtat:
    string, ouverture: string, fouilles: string, coulage: string, montage: string, finCw: string,poseCompteur:string) {
    this.codeSite = codeSite;
    this.dateGo = dateGo;
    this.typologie = typologie;

    this.etatCw = etatCw;
    this.elecEtat = elecEtat;
    this.ouverture = ouverture;
    this.fouilles = fouilles;
    this.coulage = coulage;
    this.montage = montage;
    this.finCw = finCw;
    this.poseCompteur=poseCompteur;
  }

  codeSite:string;
  dateGo:string;
  typologie:string;
  equipeCw:string;
  etatCw:string;
  elecEtat:string;
  ouverture:string;
  fouilles:string;
  coulage:string;
  montage:string;
  finCw:string;
  poseCompteur:string

}
