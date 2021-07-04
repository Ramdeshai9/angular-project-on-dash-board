import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule } from  '@angular/material/button';
import { MatListModule} from  '@angular/material/list';
import {  MatSidenavModule } from  '@angular/material/sidenav';
import { MatIconModule } from  '@angular/material/icon';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { EmployeeComponent } from './employee/employee.component'
import { HttpClientModule } from '@angular/common/http';
import { employeService } from './employe.service';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
  
  ],
  providers: [employeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
