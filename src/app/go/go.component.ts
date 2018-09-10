import {Component, OnInit, ViewChild} from '@angular/core';
import {GoService} from '../services/go.service';
import {MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

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
    this.myControl.valueChanges.subscribe(data => this.goService.getCodeSite(data)
      .subscribe(data2 => this.searchResult = data2.body));
  }

  dataSource = new MatTableDataSource();

  ngOnInit() {
    console.log('----------init-----------------');
    this.maRecherche(0, 10);
  }

  displayedColumns: string[] = ['codeSite', 'dateGo', 'region', 'typologie', 'hauteur', 'latitude', 'longitude'];

  applyFilter() {
    this.maRecherche(0, 10);
  }

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
    this.goService.rechercheGo(this.recherche, index, size, this.filtreTypologie, this.filtreRegion).subscribe(
      data => {
        this.dataSource.data = data.body['content'];
        this.monlength = data.body['totalElements'];
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
        this.maRecherche(page.pageIndex, page.pageSize)
  }
}
