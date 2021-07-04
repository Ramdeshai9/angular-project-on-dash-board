import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmenu';
  dob= new  Date(2021,5,27);
  employe1=false;
  toolbar=true;
  menu=true;
  image=true;
  sidenav1:boolean=false;
  employee():any {
    this.employe1=!this.employe1 ;
    this.toolbar=!this.toolbar;
  }
  toggle(){
    this.sidenav1=!this.sidenav1;

  }
  tolbar(){
    this.toolbar=!this.toolbar;
    this.employe1=!this.employe1 ;
  
  }
  img(){
    this.image=! this.image;
  }
}
