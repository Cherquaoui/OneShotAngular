import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent, Sort} from '@angular/material';
import {GoService} from '../services/go.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {OneShot} from '../entities/composition/OneShot';

@Component({
  selector: 'app-elec',
  templateUrl: './elec.component.html',
  styleUrls: ['./elec.component.css']
})
export class ElecComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  myControl: FormControl = new FormControl();
  searchResult;
  filtreRegion: string = '';
  filtreTypologie: string = '';
  filtreRecherche: string = '';
  filtreEquipe: string = '';
  filtre = false;
  filtreCw = '';
  filtreElec = '';

  suivi = true;
  date = false;
  trav = false;

  dataSource: OneShot[];

  length;

  sortActive = 'elec.elecEtat';
  sortDirection = 'asc';

  interval;

  refreshData(page: number, size: number) {
    this.goService.getOneShot(page, size, this.filtreRecherche, this.filtreRegion, this.filtreTypologie,
      this.filtreCw, this.filtreEquipe, this.filtreElec, this.sortActive, this.sortDirection).subscribe(data => {
      this.dataSource = data.body['content'];
      this.length = data.body['totalElements'];
    }, error1 => this.router.navigateByUrl('/login'));

  }

  constructor(private goService: GoService,
              private router: Router) {
    this.myControl.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      this.goService.getCodeSite(data, this.filtreRegion, this.filtreTypologie)
        .subscribe(data2 => this.searchResult = data2);
      this.refreshData(0, 15);
    });
  }


  ngOnInit() {
    this.sort.direction = 'asc';
    this.sort.start = 'asc';
    this.sort.disableClear = true;
    this.sort.active = 'elec.elecEtat';
    this.refreshData(0, 15);

  }


  cliqueSuivi() {
    this.suivi = true;
    this.trav = false;
    this.date = false;
  }

  cliqueDates() {
    this.suivi = false;
    this.trav = false;
    this.date = true;
  }

  cliqueTravaux() {
    this.suivi = false;
    this.trav = true;
    this.date = false;
  }

  modifier(data) {
    console.log(data);
    this.router.navigate(['elec', data]);
  }

  modifierTrav(data) {
    this.router.navigate(['elec/trav', data]);
  }

  page(page: PageEvent) {
    this.refreshData(page.pageIndex, page.pageSize);
  }

  sortData(sort: Sort) {
    this.sortActive = sort.active;
    this.sortDirection = sort.direction;
    this.refreshData(0, 15);
    this.matPaginator.firstPage();

  }


}
