import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {GoComponent} from './go/go.component';


//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatSlideToggleModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {GoService} from './services/go.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AjouterGoComponent} from './go/ajouter-go/ajouter-go.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {RouterModule} from '@angular/router';
import {CwComponent} from './cw/cw.component';
import {ElecComponent} from './elec/elec.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {ModifierGoComponent} from './go/modifier-go/modifier-go.component';
import {CwModifierComponent} from './cw/cw-modifier/cw-modifier.component';
import {ElecModifierComponent} from './elec/elec-modifier/elec-modifier.component';
import {ElecService} from "./services/elec.service";
import {ElecTravModifierComponent} from './elec/elec-trav-modifier/elec-trav-modifier.component';

import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./services/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    GoComponent,
    AjouterGoComponent,
    CwComponent,
    ElecComponent,
    ModifierGoComponent,
    CwModifierComponent,
    ElecModifierComponent,
    ElecTravModifierComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'/login',pathMatch:'full'},
      {path: 'login', component: LoginComponent},
      {path: 'go', component: GoComponent},
      {path: 'cw', component: CwComponent},
      {path: 'elec', component: ElecComponent},
      {path: 'ajouter', component: AjouterGoComponent},
      {path: 'go/ajouter', component: AjouterGoComponent},
      {path: 'go/:codeSite', component: ModifierGoComponent},
      {path: 'cw/:codeSite', component: CwModifierComponent},
      {path: 'elec/:codeSite', component: ElecModifierComponent},
      {path: 'elec/trav/:codeSite', component: ElecTravModifierComponent},
    ]),
    //Angular Material
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  providers: [GoService, ElecService,AuthenticationService,    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthGuard,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
