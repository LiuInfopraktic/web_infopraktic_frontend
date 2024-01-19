import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { DateFormatService } from 'src/app/project/services/dateFormat/date-format.service';

@Component({
  selector: 'app-benefits-bar-graph',
  templateUrl: './benefits-bar-graph.component.html',
  styleUrls: ['./benefits-bar-graph.component.css']
})
export class BenefitsBarGraphComponent implements OnInit, AfterViewInit {

  @Input() graphic_data:any | undefined;

  // global vars declaration
  colors:any = ['#0084D080', '#000']
  graph_max_val_per:number = 20;
  graph_max_val!:number;
  months:any = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Septembre', 'Octubre', 'Novembre', 'Desembre']
  
  beneficis!:any;
  benefit_blocks:number = 2; // ha de tenir tb la info de com obtenir cada block

  constructor(private dateServ:DateFormatService) { }

  ngOnInit(): void {
    this.beneficis = this.calculateBenefits();

    // get max graph max index value
    // let value = this.findMaxPropertyValue(this.benefici_ventes1.benefits)
    let value = this.findMaxPropertyValue(this.beneficis)
    this.graph_max_val = Math.ceil((value + (value*this.graph_max_val_per/100))/100)*100; // round number without decens
  }

  calculateBenefits(){
    // output [{mes:'xxx', benefit:x, values:['v1','v2']}]
    let benefits_DB = [this.generateRandomBenefits(`benefits 1`),this.generateRandomBenefits(`benefits 2`)]
    let benefits = []
    for(let month = 0; month < 12; month++){
      let obj:any = {month:this.months[month]}
      let total = 0;

      for(let block = 0; block < this.benefit_blocks; block++){
        let obj_tmp = benefits_DB[block]
        let benefit = obj_tmp.benefits.find((m:any) => m.month === month+1)?.benefit
        if(benefit){
          obj[`block${block}`] = benefit;
          total += benefit
        }
      }
      obj['total'] = total
      benefits.push(obj)
    }
    return benefits
  }

  ngAfterViewInit(): void {
    // set graph column height
    let graph:HTMLDivElement | null = document.querySelector('.graphic');
    let max_height = 0;
    if(graph) max_height = graph.offsetHeight
    let i = 0;
    document.querySelectorAll('.graphic .month').forEach((m:any) => {
      let month = this.beneficis.find((m:any) => m.month === this.months[i])
      m.setAttribute('month-name', this.dateServ.getShortName(i+1))
      m.style.height = max_height * month[`total`] / this.graph_max_val + 'px'
      i++;
    })

    // set graph indexes values
    let index_diference = Math.ceil((this.graph_max_val/6)/100)*100;
    document.querySelectorAll('.index-box .index').forEach((i:any) => {
      i.setAttribute("index-value",  index_diference * i.getAttribute("index-value") )
    });

    // change column colors
    document.querySelectorAll('.month').forEach((m:any) => m.style.background = this.graphic_data?.color_rgba)
  }

  generateRandomBenefits(name:string){
    const benefits = [];

    for (let month = 1; month <= 12; month++) {
      const benefit = Math.floor(Math.random() * 601) - 100; // Número aleatorio entre -100 y 500
      benefits.push({ month, benefit });
    }
    return {name, benefits}
  }

  findMaxPropertyValue(array:any) {
    return array.reduce((max:number, obj:any) => (obj['total'] > max ? obj['total'] : max), array[0]['total']);
  }
}
