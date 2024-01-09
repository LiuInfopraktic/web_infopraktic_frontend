import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Form Visual Actions
  inputFocus(box:HTMLElement){ box.classList.add('focus')}
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
