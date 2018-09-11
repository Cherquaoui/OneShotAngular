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
  dataSource: MatTableDataSource<any>;

  constructor(private goService: GoService,
              private router: Router) {
    this.dataSource = new MatTableDataSource();
  }

  refreshData(data) {
    this.goService.getOneShot().subscribe(data => {
      this.dataSource.data = data.body["content"];
      this.lenght = data.body['totalElements'];
    }, error1 => this.router.navigateByUrl('/login'));

  }

  ngOnInit() {

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


  modifier(data) {
    console.log(data);
    this.router.navigate(['cw', data]);
  }

  page(page: PageEvent) {
    this.refreshData(page.pageIndex);
    this.dataSource['pageIndex'] = page.pageIndex;
  };


}
