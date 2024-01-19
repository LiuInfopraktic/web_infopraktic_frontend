import { Component, OnInit } from '@angular/core';
import { AGraphic } from 'src/app/project/services/API/graphics/AGraphics';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {
  graphics!:any;
  test:string = 'aBc';
  constructor(private AGraphic:AGraphic) { }

  ngOnInit(): void {
    this.getGraphics()
  }

  async getGraphics(){
    let graphics = await this.AGraphic.userGraphics().toPromise();
    this.graphics = graphics.graphics
  }
}
