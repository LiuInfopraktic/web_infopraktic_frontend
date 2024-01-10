import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ALogin } from 'src/app/project/services/API/login/ALogin';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  ALogin:ALogin = new ALogin(this.http);
  constructor (private http:HttpClient, private Router:Router) {}

  ngOnInit(): void {
  }

  // Login
  async login(user:string, password:string, btn:HTMLButtonElement){
    btn.classList.add('loading')
    this.deleteOldErrorMsgs()
    if(user && password){
      try{
        let response = await this.ALogin.getLogin({user, password}).toPromise();
        // TODO: save token
        localStorage.setItem('infopraktic-token', response.token);
        btn.classList.remove('loading');
        this.Router.navigate(['/home']);

      } catch(error){
        if (error instanceof HttpErrorResponse) {
          if(error.error.error == "user doesn't exist") {
            let label = document.querySelector("label.error[name='user']")
            document.querySelector('.input-box-user')?.classList.add('error')
            if(label) {
              label.classList.add('show')
              label.innerHTML = "L'usuari no està registrat.";
            }
          } else if (error.error.error == "user missing") this.emptyUser;
           else if (error.error.error == "password missing") this.emptyPassword;
           else if (error.error.error == "wrong password") {
            let label = document.querySelector("label.error[name='pass']")
            document.querySelector('.input-box-pass')?.classList.add('error')
            if(label) {
              label.classList.add('show')
              label.innerHTML = "La contrassenya no es correcte.";
            }
          } else this.defaultError()

        } else {
          this.defaultError()
        }
      }
    } else {
      if(!user) this.emptyUser();
      if(!password) this.emptyPassword();
    }
    btn.classList.remove('loading')
  }

  deleteOldErrorMsgs(){
    document.querySelectorAll('label.error').forEach(l => {l.classList.remove('show'); l.innerHTML = ''})
  }
  emptyUser(){
    let label = document.querySelector("label.error[name='user']")
    document.querySelector('.input-box-user')?.classList.add('error')
    if(label) {
      label.classList.add('show')
      label.innerHTML = "Aquest camp no pot estar buit.";
    }
  }
  emptyPassword(){
    let label = document.querySelector("label.error[name='pass']")
    document.querySelector('.input-box-pass')?.classList.add('error')
    if(label) {
      label.classList.add('show')
      label.innerHTML = "Aquest camp no pot estar buit.";
    }
  }

  defaultError(){
    let label = document.querySelector("label.error[name='global']")
    if(label) {
      label.classList.add('show')
      label.innerHTML = "No s'ha pogut completar el login, torna-ho a intentar.";
    }

  }

  // Form Visual Actions
  inputFocus(box:HTMLElement){ box.classList.add('focus'); box.classList.remove('error')}
  inputBlur(box:HTMLElement, input:HTMLInputElement){ input.value == '' ? box.classList.remove('focus') : ''}
  showPassword(input:HTMLInputElement, btn:HTMLElement){
    if(btn.classList.contains('fa-eye-slash')){
      btn.classList.replace('fa-eye-slash', 'fa-eye');
      input.type='text';
    } else {
        btn.classList.replace('fa-eye', 'fa-eye-slash');
        input.type='password';
    }
  }

}
