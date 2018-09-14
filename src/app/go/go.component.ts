import {Component, OnInit, ViewChild} from '@angular/core';
import {GoService} from '../services/go.service';
import {MatSort, MatTableDataSource, PageEvent, Sort} from '@angular/material';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime, throttleTime} from "rxjs/operators";

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

  monhidden:boolean=true;
  myControl:FormControl = new FormControl();
  searchResult;
  filtreRegion: string = '';
  filtreTypologie: string = '';
  recherche: string = '';
  filtre = false;
  monlength;
  sortHeader='codeSite';


  constructor(private goService: GoService,
              private router: Router) {
    this.myControl.valueChanges.pipe(debounceTime(500)).
    subscribe(data => {
      this.goService.getCodeSite(data,this.filtreRegion,this.filtreTypologie)
        .subscribe(data2 => this.searchResult=data2);
    this.maRecherche(0,15);
    });
  }

  dataSource = new MatTableDataSource();

  ngOnInit() {
    console.log('----------init-----------------');

    this.dataSource.sort = this.sort;
    this.dataSource.sort.direction="asc";
    this.dataSource.sort.start="asc";
    this.dataSource.sort.disableClear=true;
    this.dataSource.sort.active="codeSite";

    this.test();
  }

  displayedColumns: string[] = ['codeSite', 'dateGo', 'region', 'typologie', 'hauteur', 'latitude', 'longitude'];

  maRecherche(index, size) {
    console.log('recherche --------------------------------------');
    this.goService.rechercheGo(index, size,this.recherche,  this.filtreTypologie,
      this.filtreRegion,this.sortHeader,this.dataSource.sort.direction).subscribe(
      data => {

        this.dataSource.data = data.body['content'];
        this.monlength = data.body['totalElements'];


      },error1 => {
        this.router.navigate(['login']);
        console.log("error")
      }

    );


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

  @ViewChild(MatSort) sort: MatSort;

  test(){

    this.monhidden=false;
    this.dataSource.sort.sortChange.pipe(debounceTime(150)).subscribe(data=>{
      this.sortHeader=data.active;
      this.maRecherche(0,15);
      ;
    });
    setTimeout(()=>{
      this.monhidden=true;
      console.log(this.monhidden);
    },350)


  }

}
