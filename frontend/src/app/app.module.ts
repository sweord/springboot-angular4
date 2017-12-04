import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatPaginatorModule,
} from '@angular/material';

import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './component/login/login.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatMenuModule, MatIconModule,
    MatButtonModule, MatSidenavModule, MatCardModule,
    MatGridListModule, MatListModule, MatTabsModule,
    FormsModule, MatFormFieldModule, MatInputModule,
    MatTableModule, MatSnackBarModule, MatDialogModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [HttpClientModule, MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
