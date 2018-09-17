import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent, Sort} from '@angular/material';
import {GoService} from '../services/go.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {equipe} from '../entities/equipe';
import {OneShot2} from '../entities/composition/OneShot2';
import {OneShot} from '../entities/composition/OneShot';

@Component({
  selector: 'app-cw',
  templateUrl: './cw.component.html',
  styleUrls: ['./cw.component.css']
})
export class CwComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) matPaginator:MatPaginator;

  myControl: FormControl = new FormControl();
  searchResult;
  filtreRegion: string = '';
  filtreTypologie: string = '';
  filtreRecherche: string = '';
  filtreEquipe: string = '';
  filtre = false;
  filtreCw = '';
  filtreElec = '';
  sortHeader: string = 'cw.etatCw';
  listeEquipe: equipe[];

  sortDirection = 'asc';

  suivi = true;
  date = false;




  lenght;
  dataSource: OneShot[];

  constructor(private goService: GoService,
              private router: Router) {

    this.myControl.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      this.goService.getCodeSite(data, this.filtreRegion, this.filtreTypologie)
        .subscribe(data2 => this.searchResult = data2);
      this.refreshData(0, 15);
    });

    this.goService.getEquipe().subscribe(data => this.listeEquipe = data);
  }

  refreshData(page: number, size: number) {
    this.goService.getOneShot(page, size, this.filtreRecherche, this.filtreRegion, this.filtreTypologie,
      this.filtreCw, this.filtreEquipe, this.filtreElec, this.sortHeader, this.sortDirection).subscribe(data => {
      this.dataSource = data.body['content'];
      console.log(data);
      this.lenght = data.body['totalElements'];
    }, error1 => this.router.navigateByUrl('/login'));

  }

  ngOnInit() {
    this.sort.direction = 'asc';
    this.sort.start = 'asc';
    this.sort.disableClear = true;
    this.sort.active = 'cw.etatCw';

    this.refreshData(0, 15);
  }


  cliqueSuivi() {
    this.suivi = true;
    this.date = false;
  }

  cliqueDates() {
    this.suivi = false;
    this.date = true;
  }


  modifier(data) {
    console.log(data);
    this.router.navigate(['cw', data]);
  }

  page(page: PageEvent) {
    this.refreshData(page.pageIndex, page.pageSize);

  };

  sortData(sort: Sort) {
    this.sortHeader = sort.active;
    this.sortDirection = sort.direction;
    this.refreshData(0, 15);
    this.matPaginator.firstPage();
  }

}

