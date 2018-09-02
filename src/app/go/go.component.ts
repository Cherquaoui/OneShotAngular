import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GoService} from '../services/go.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";


class AuthoriastionService {
}

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit, OnDestroy{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private goService:GoService,
              private router:Router,
              private authentication:AuthenticationService) { }

  dataSource;
  interval;
  refreshData(){
    this.goService.getGo().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data.body);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;



    },error1 => {
      this.router.navigateByUrl('/login');
    } );
    clearInterval(this.interval);
  }

  ngOnInit() {
    console.log("OnInit");
    console.log(this.authentication.token)

      this.interval = setInterval(() => {
        this.refreshData();
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
}
