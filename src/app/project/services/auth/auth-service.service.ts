import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  public isAuthenticated(): boolean {
    let auth = false
    if(localStorage.getItem('infopraktic-token'))  auth = true
    return auth;
  }
}
