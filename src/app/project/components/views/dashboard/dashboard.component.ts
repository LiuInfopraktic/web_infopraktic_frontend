import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any = this.getUser();
  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

  getUser(){
    const helper = new JwtHelperService();
    let token = localStorage.getItem('infopraktic-token');
    try {
      if (token) return helper.decodeToken(token);
      else return null
    } catch(Error) {
      return null;
    }
  }

  /* set the active element in a group */
  setActive(className:string, element:HTMLElement){
    if(!element.classList.contains('active')){
      document.querySelector(`.${className}.active`)?.classList.remove('active');
      element.classList.add('active');
    }
  }

}