import {Component, OnInit} from '@angular/core';
import {GoService} from '../services/go.service';
import {MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime, throttleTime} from "rxjs/operators";

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

  myControl:FormControl = new FormControl();
  searchResult;
  filtreRegion: string = '';
  filtreTypologie: string = '';
  recherche: string = '';
  filtre = false;
  monlength;

  constructor(private goService: GoService,
              private router: Router) {
    this.myControl.valueChanges.pipe(debounceTime(500)).
    subscribe(data => {
      this.goService.getCodeSite(data,this.filtreRegion,this.filtreTypologie)
        .subscribe(data2 => this.searchResult=data2);
    this.maRecherche(0,10)});

  }

  dataSource = new MatTableDataSource();

  ngOnInit() {
    console.log('----------init-----------------');
    this.maRecherche(0, 10);
  }

  displayedColumns: string[] = ['codeSite', 'dateGo', 'region', 'typologie', 'hauteur', 'latitude', 'longitude'];



  checked = false;

  check(data) {
    if(this.filtre=true){
      console.log(data);
      this.filtreRegion="";
      this.recherche="";
      this.filtreTypologie="";
      this.checked=false;
      this.filtre=false;
      this.ngOnInit();
    }


  }

  maRecherche(index, size) {
    console.log('recherche --------------------------------------');
    this.goService.rechercheGo(index, size,this.recherche,  this.filtreTypologie, this.filtreRegion).subscribe(
      data => {

        this.dataSource.data = data.body['content'];
        console.log("datasource : " + this.dataSource.data);
        this.monlength = data.body['totalElements'];


      },error1 => {
        this.router.navigate(['login']);
        console.log("error")
      }

    );

    if(this.recherche=="" && this.filtreTypologie=="" && this.filtreRegion==""){
      this.filtre=false;
      this.checked=false;
    }
    if(!(this.recherche=="" && this.filtreTypologie=="" && this.filtreRegion=="")){
      this.checked=true;
      this.filtre=true;
    }
  }

  modifier(data) {
    console.log(data);

    this.router.navigate(['go', data]);
  }

  goCw(data) {
    this.router.navigate(['cw', data]);
  }

  goElec(data) {
    this.router.navigate(['elec', data]);
  }

  page(page: PageEvent) {
        this.maRecherche(page.pageIndex, page.pageSize);
  }
}
