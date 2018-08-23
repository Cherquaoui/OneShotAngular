import {Component, OnInit, ViewChild} from '@angular/core';
import {GoService} from '../services/go.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {OneShot} from '../entities/composition/OneShot';
import {map, startWith} from 'rxjs/internal/operators';

@Component({
  selector: 'app-oneshot',
  templateUrl: './oneshot.component.html',
  styleUrls: ['./oneshot.component.css']
})
export class OneshotComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  site;
  codeSites = new Array();

  constructor(private goService:GoService) {

  }
  afficher(data){
    console.log(data)
  }

  dataSource;
  myControl = new FormControl();
  filteredOptions:Observable<String[]>;

  ngOnInit() {


    this.goService.getOneShot().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    for(let code of this.dataSource.data){
      this.codeSites.push(code.codeSite);
    }
    console.log(this.codeSites);
    },error1 =>console.log(error1),()=>console.log("fin")
    );

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  displayedColumns: string[] = ['codeSite','dateGo','region', 'typologie','hauteur','latitude','longitude','etatCw','etatElec'];
  applyFilter(filterValue: string) {


    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.codeSites.filter(option => option.toLowerCase().includes(filterValue));
  }

}
