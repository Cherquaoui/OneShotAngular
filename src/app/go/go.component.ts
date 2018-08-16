import {Component, OnInit,  ViewChild} from '@angular/core';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Go} from '../entities/Go';
import {GoService} from '../go.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {map, startWith} from 'rxjs/internal/operators';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  site:string;

  constructor(private goService:GoService,private router:Router) { }
  afficher(data){
    console.log(data)
    this.site=data;


  }
  dataSource;





  ngOnInit() {
    console.log("ngoninit")
    this.goService.getGo().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } );
  }
  displayedColumns: string[] = ['codeSite','dateGo','region', 'typologie','hauteur','latitude','longitude'];
  applyFilter(filterValue: string) {


    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  modifier(data){

    this.router.navigate(['go',data]);
  }



}


