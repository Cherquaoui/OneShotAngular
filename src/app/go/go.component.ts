import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GoService} from '../services/go.service';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {Router} from '@angular/router';



@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit, OnDestroy{
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
  length:number=0

  constructor(private goService:GoService,
              private router:Router) { }

  dataSource;
  interval;

  newPage(data){
    this.goService.getGo(data).subscribe(data=>{
      this.dataSource.data = data.body;

    });

  }
  refreshData(data){
    this.goService.getGo(data).subscribe(data=>{

      this.dataSource=new MatTableDataSource(data.body.content);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.length=data.body.totalElements;




    },error1 => {
      this.router.navigateByUrl('/login');
    } );
    clearInterval(this.interval);
  }

  ngOnInit() {
    console.log("OnInit");

      this.interval = setInterval(() => {
        this.refreshData(0);
      }, 500);

  }
  displayedColumns: string[] = ['codeSite','dateGo','region', 'typologie','hauteur','latitude','longitude'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  modifier(data){
    console.log(data)
    this.router.navigate(['go',data]);

  }

  goCw(data){this.router.navigate(['cw',data]);}
  goElec(data){this.router.navigate(['elec',data]);}
  ngOnDestroy(){
    console.log("destroy")
    clearInterval(this.interval)
  }
  page(page:PageEvent){
    this.goService.getGo(page.pageIndex).subscribe(data=>{

      this.dataSource=new MatTableDataSource(data.body.content);
      console.log(this.dataSource);
      this.dataSource.sort = this.sort;
      this.dataSource.pageIndex = page.pageIndex;
      this.dataSource.totalSize=page.length;
        this.length=data.body.totalElements;
  })
}
}
