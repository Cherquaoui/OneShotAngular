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
  lenght;
  dataSource:MatTableDataSource<any>;

  cwObject: CwObject[] = [];

  constructor(private goService: GoService,
              private router: Router) {
    this.dataSource = new MatTableDataSource();
  }





  refreshData(data) {
    this.goService.getOneShot(data).subscribe(data => {
      this.dataSource.data=data.body["content"];
      this.lenght = data.body['totalElements'];
    }, error1 => this.router.navigateByUrl('/login'));

  }

  ngOnInit() {
    console.log("----------init-----------------")

    this.refreshData(0);

  }

  displayedColumns: string[] = ['codeSite', 'etatCw', 'typologie', 'equipeCw', 'elecEtat', 'commentairesCw'];
  displayedColumns1: string[] = ['codeSite', 'dateGo', 'ouverture', 'fouilles',
    'coulage', 'montage', 'finCw'];
  displayedColumns2: string[] = ['codeSite', 'etatCw', 'typologie', 'equipeCw', 'elecEtat', 'commentairesCw'];

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

  page(page: PageEvent) {

    this.refreshData(page.pageIndex);
      this.dataSource['pageIndex'] = page.pageIndex;


    };


}


///////////////////////////////////////
export class CwObject {

  constructor(codeSite: string, dateGo: string, typologie: string,
              etatCw: string, equipeCw: string, elecEtat: string,
              ouverture: string, fouilles: string, coulage: string,
              montage: string, finCw: string, poseCompteur: string, commentairesCw: string) {
    this.codeSite = codeSite;
    this.dateGo = dateGo;
    this.typologie = typologie;
    this.etatCw = etatCw;
    this.equipeCw = equipeCw;
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
