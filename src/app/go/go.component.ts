import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GoService} from '../go.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit, OnDestroy{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  site:string;

  constructor(private goService:GoService,
              private router:Router) { }

  dataSource;
  interval;
  refreshData(){

    this.goService.getGo().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    } );
    clearInterval(this.interval);



  }


  ngOnInit() {
    console.log("OnInit");

      this.interval = setInterval(() => {
        this.refreshData();

      }, 100);

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

  ngOnDestroy(){
    console.log("destroy")
    clearInterval(this.interval)
  }






}


