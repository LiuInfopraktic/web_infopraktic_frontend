import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsh-fixatge',
  templateUrl: './dsh-fixatge.component.html',
  styleUrls: ['./dsh-fixatge.component.css']
})
export class DshFixatgeComponent implements OnInit {
  state:string = 'default';
  workedTime:string = '00:00';
  constructor() { }

  ngOnInit(): void {
  }
  setActive(btn:HTMLElement){
    if(btn.classList.contains('active')){
      btn.classList.remove('active');
      this.state = ('default')
    } else {
      btn.classList.add('active');
      this.state = ('custom')
    }
  }
}
