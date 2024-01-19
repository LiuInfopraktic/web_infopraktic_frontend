import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {
  monthFormatTable = [
    {num:1, name:'Gener', short_name:'Gen'},
    {num:2, name:'Febrer', short_name:'Feb'},
    {num:3, name:'Març', short_name:'Mar'},
    {num:4, name:'Abril', short_name:'Abr'},
    {num:5, name:'Maig', short_name:'Mai'},
    {num:6, name:'Juny', short_name:'Jun'},
    {num:7, name:'Juliol', short_name:'Jul'},
    {num:8, name:'Agost', short_name:'Ago'},
    {num:9, name:'Septembre', short_name:'Sep'},
    {num:10, name:'Octubre', short_name:'Oct'},
    {num:11, name:'Novembre', short_name:'Nov'},
    {num:12, name:'Desembre', short_name:'Des'},
  ];

  constructor() { }

  getShortName(month:number|string) :string {
    console.log(month)
    return this.monthFormatTable.filter((m:any) => m.name == month || m.num == month)[0].short_name
  }
}
