import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {GoService} from '../services/go.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cw',
  templateUrl: './cw.component.html',
  styleUrls: ['./cw.component.css']
})
export class CwComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  lenght

  interval;
  cwObject: CwObject[] = [];

  constructor(private goService: GoService,
              private router: Router) {
  }


  dataSource = new MatTableDataSource();

  refreshData(){
    this.goService.getOneShot(0).subscribe(data => {
      for (let monsite of data.body.content) {
        if (monsite.cw != null && monsite.electrification!=null) {
          let cw = new CwObject(monsite.codeSite.toString(), monsite.dateGo, monsite.typologie,
            monsite.cw.etatCw,monsite.cw.equipeCw ,monsite.electrification.elecEtat, monsite.cw.ouverture, monsite.cw.fouilles,
            monsite.cw.coulage, monsite.cw.montage, monsite.cw.finCw, monsite.electrification.poseCompteur, monsite.cw.commentairesCw);
          this.cwObject.push(cw);
        }
      }
      this.dataSource = new MatTableDataSource<any>(this.cwObject);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.lenght=data.body.totalElements;
    },error1 => this.router.navigateByUrl('/login'))
    clearInterval(this.interval);
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.refreshData();
    }, 500);
  }

  displayedColumns: string[] = ['codeSite','etatCw', 'typologie', 'equipeCw', 'elecEtat', 'commentairesCw'];
  displayedColumns1: string[] = ['codeSite','dateGo',  'ouverture', 'fouilles',
    'coulage', 'montage', 'finCw'];
  displayedColumns2: string[] = ['codeSite','etatCw', 'typologie', 'equipeCw', 'elecEtat', 'commentairesCw'];

  monClique() {
    this.displayedColumns = this.displayedColumns1;
  }

  monClique2() {
    this.displayedColumns = this.displayedColumns2;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  modifier(data) {
    console.log(data);
    this.router.navigate(['cw', data]);
  }

  page(page:PageEvent){

    this.goService.getOneShot(page.pageIndex).subscribe(data => {
      this.cwObject=[]

      for (let monsite of data.body.content) {
        if (monsite.cw != null && monsite.electrification!=null) {
          let cw = new CwObject(monsite.codeSite.toString(), monsite.dateGo, monsite.typologie,
            monsite.cw.etatCw,monsite.cw.equipeCw ,monsite.electrification.elecEtat, monsite.cw.ouverture, monsite.cw.fouilles,
            monsite.cw.coulage, monsite.cw.montage, monsite.cw.finCw, monsite.electrification.poseCompteur, monsite.cw.commentairesCw);
          this.cwObject.push(cw);
        }
      }
      this.dataSource = new MatTableDataSource(this.cwObject);
      this.dataSource.pageIndex = page.pageIndex;
      this.dataSource.sort = this.sort;

  })

  }
}


///////////////////////////////////////
  export class CwObject {

  constructor(codeSite: string, dateGo: string, typologie: string,
              etatCw: string,equipeCw:string, elecEtat:string,
              ouverture: string, fouilles: string, coulage: string,
              montage: string, finCw: string, poseCompteur: string, commentairesCw: string) {
    this.codeSite = codeSite;
    this.dateGo = dateGo;
    this.typologie = typologie;
    this.etatCw = etatCw;
    this.equipeCw=equipeCw;
    this.elecEtat = elecEtat;
    this.ouverture = ouverture;
    this.fouilles = fouilles;
    this.coulage = coulage;
    this.montage = montage;
    this.finCw = finCw;
    this.poseCompteur = poseCompteur;
    this.commentairesCw = commentairesCw;
  }
  codeSite: string;
  dateGo: string;
  typologie: string;
  equipeCw: string;
  etatCw: string;
  elecEtat: string;
  ouverture: string;
  fouilles: string;
  coulage: string;
  montage: string;
  finCw: string;
  poseCompteur: string;
  commentairesCw: string;

}
