import {Component, Inject, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from './User';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {SpinnerService} from '../services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erreur: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: this.erreur
    });


  }


  user: User = new User();

  constructor(private authentication: AuthenticationService,
              private http: HttpClient,
              private router: Router,
              public dialog: MatDialog,
              public spinnerService: SpinnerService) {
  }

  ngOnInit() {

  }

  submit(value) {

    this.authentication.logIn(value).subscribe(resp => {

      if (resp.headers.get('Authorization') !== null) {
        this.authentication.saveToken(resp.headers.get('Authorization'));
        this.router.navigateByUrl('/go');
      }
    })
  }

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
