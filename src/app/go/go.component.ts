import {Component, OnInit, ViewChild} from '@angular/core';
import {GoService} from '../services/go.service';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent, Sort} from '@angular/material';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime, throttleTime} from 'rxjs/operators';
import {Go} from '../entities/Go';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  monhidden: boolean = true;
  myControl: FormControl = new FormControl();
  searchResult;
  filtreRegion: string = '';
  filtreTypologie: string = '';
  recherche: string = '';
  filtre = false;
  monlength;
  sortActive = 'dateGo';
  sortDirection = 'desc';


  constructor(private goService: GoService,
              private router: Router) {
    this.myControl.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      this.goService.getCodeSite(data, this.filtreRegion, this.filtreTypologie)
        .subscribe(data2 => this.searchResult = data2);
      this.maRecherche(0, 15);
    });
  }

  dataSource: Go[] = [];

  ngOnInit() {
    console.log('----------init-----------------');


    this.sort.direction = 'desc';
    this.sort.start = 'desc';
    this.sort.disableClear = true;
    this.sort.active = 'dateGo';
    this.maRecherche(0, 15);
  }

  maRecherche(index, size) {
    console.log('recherche --------------------------------------');
    this.goService.rechercheGo(index, size, this.recherche, this.filtreTypologie,
      this.filtreRegion, this.sortActive, this.sortDirection).subscribe(
      data => {
        this.dataSource = data.body['content'];
        this.monlength = data.body['totalElements'];

      }, error1 => {
        this.router.navigate(['login']);
        console.log('error');
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

  sortData(sort: Sort) {
    console.log(sort);
    this.sortActive = sort.active;
    this.sortDirection = sort.direction;
    this.maRecherche(0, 15);
    this.matPaginator.firstPage();
  }

}
