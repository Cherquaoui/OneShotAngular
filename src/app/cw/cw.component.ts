import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, PageEvent} from '@angular/material';
import {GoService} from '../services/go.service';
import {Router} from '@angular/router';
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {equipe} from "../entities/equipe";

@Component({
  selector: 'app-cw',
  templateUrl: './cw.component.html',
  styleUrls: ['./cw.component.css']
})
export class CwComponent implements OnInit {

  myControl:FormControl = new FormControl();
  searchResult;
  filtreRegion: string = '';
  filtreTypologie: string = '';
  filtreRecherche: string = '';
  filtreEquipe:string='';
  filtre = false;
  filtreCw="";
  filtreElec="";
  monlength;

  listeEquipe:equipe[];

  checked = false;

  check(data) {
    if(this.filtre=true){
      console.log(data);
      this.filtreRegion="";
      this.filtreRecherche="";
      this.filtreTypologie="";
      this.checked=false;
      this.filtre=false;
      this.ngOnInit();
    }
  }





  lenght;
  dataSource: MatTableDataSource<any>;

  constructor(private goService: GoService,
              private router: Router) {
    this.dataSource = new MatTableDataSource()
    this.myControl.valueChanges.pipe(debounceTime(500)).
    subscribe(data => {
      this.goService.getCodeSite(data,this.filtreRegion,this.filtreTypologie)
        .subscribe(data2 => this.searchResult=data2);
      this.refreshData(0,10)});

    this.goService.getEquipe().subscribe(data=>this.listeEquipe=data);
  }

  refreshData(page:number,size:number) {
    this.goService.getOneShot(page, size,this.filtreRecherche,this.filtreRegion,this.filtreTypologie).
    subscribe(data => {
      this.dataSource.data = data.body["content"];
      this.lenght = data.body['totalElements'];
    }, error1 => this.router.navigateByUrl('/login'));

  }

  ngOnInit() {

    this.refreshData(0,10);

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


  modifier(data) {
    console.log(data);
    this.router.navigate(['cw', data]);
  }

  page(page: PageEvent) {
    this.refreshData(page.pageIndex,page.pageSize);

  };


}
