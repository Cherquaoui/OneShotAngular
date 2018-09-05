import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GoService} from '../services/go.service';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
  monlength;
  pageSize:number[];

  constructor(private goService: GoService,
              private router: Router) {
  }

  dataSource = new MatTableDataSource();
  interval;


  refreshData(index,size) {
    this.goService.getGo(index,size).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.body['content']);
      this.dataSource.sort = this.sort;
      this.monlength = data.body['totalElements'];
      this.pageSize = [5,10,25,50,70,this.monlength];
    },error1 => this.router.navigate(['/login']));
  }


  ngOnInit() {
    this.refreshData(0,10);
  }

  displayedColumns: string[] = ['codeSite', 'dateGo', 'region', 'typologie', 'hauteur', 'latitude', 'longitude'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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

  ngOnDestroy() {
    console.log('destroy');
    clearInterval(this.interval);
  }

  page(page: PageEvent) {
    console.log(page)
    this.refreshData(page.pageIndex,page.pageSize);
    this.dataSource['pageIndex'] = page.pageIndex;
    this.dataSource.sort = this.sort;


  }
}
