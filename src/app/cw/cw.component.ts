import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, PageEvent} from '@angular/material';
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
  monhidden=false;
  sortHeader:string='codeSite';
  listeEquipe:equipe[];

  @ViewChild(MatSort) sort:MatSort;







  lenght;
  dataSource: MatTableDataSource<any>;

  constructor(private goService: GoService,
              private router: Router) {
    this.dataSource = new MatTableDataSource()
    this.myControl.valueChanges.pipe(debounceTime(500)).
    subscribe(data => {
      this.goService.getCodeSite(data,this.filtreRegion,this.filtreTypologie)
        .subscribe(data2 => this.searchResult=data2);
      this.refreshData(0,15)});

    this.goService.getEquipe().subscribe(data=>this.listeEquipe=data);
  }

  refreshData(page:number,size:number) {
    this.goService.getOneShot(page, size,this.filtreRecherche,this.filtreRegion,this.filtreTypologie,
      this.filtreCw,this.filtreEquipe,this.filtreElec,this.sortHeader,this.dataSource.sort.direction).
    subscribe(data => {
      this.dataSource.data = data.body["content"];
      this.lenght = data.body['totalElements'];
    }, error1 => this.router.navigateByUrl('/login'));

  }

  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.sort.direction="asc";
    this.dataSource.sort.disableClear=true;
    this.dataSource.sort.active="codeSite";
    this.filter();
  }

  displayedColumns: string[] = ['codeSite', 'cw.etatCw', 'typologie', 'cw.equipeCw.nom', 'elec.elecEtat', 'cw.commentairesCw'];
  displayedColumns1: string[] = ['codeSite', 'dateGo', 'cw.ouverture', 'cw.fouilles',
    'cw.coulage', 'cw.montage', 'cw.finCw'];
  displayedColumns2: string[] = ['codeSite', 'cw.etatCw', 'typologie', 'cw.equipeCw.nom', 'elec.elecEtat', 'cw.commentairesCw'];

  cliqueSuivi() {
    this.displayedColumns = this.displayedColumns2;
  }

  cliqueDates() {
    this.displayedColumns = this.displayedColumns1;
  }


  modifier(data) {
    console.log(data);
    this.router.navigate(['cw', data]);
  }

  page(page: PageEvent) {
    this.refreshData(page.pageIndex,page.pageSize);

  };
  filter(){
    this.monhidden=false;
    this.dataSource.sort.sortChange.pipe(debounceTime(150)).subscribe(data=>{
      this.sortHeader=data.active;
      this.refreshData(0,15);
    });

    setTimeout(()=>{
      this.monhidden=true;
      console.log(this.monhidden);
    },350)
  }

  testoneshot2(){
    this.goService.getOneShot2(0,10,this.filtreRecherche,this.filtreRegion,this.filtreTypologie,
      this.filtreCw,this.filtreEquipe,this.filtreElec,this.sortHeader,this.dataSource.sort.direction).subscribe(data=>console.log(data))
  }


}
