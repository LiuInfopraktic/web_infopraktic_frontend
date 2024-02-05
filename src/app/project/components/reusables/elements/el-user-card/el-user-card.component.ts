import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './el-user-card.component.html',
  styleUrls: ['./el-user-card.component.css']
})
export class ElUserCardComponent implements OnInit {

  @Input() user:any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
