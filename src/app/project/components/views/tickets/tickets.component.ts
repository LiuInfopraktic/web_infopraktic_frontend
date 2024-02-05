import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ATickets } from 'src/app/project/services/API/tickets/ATickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  customer_list:any = ["Netgar", "Findhome", "djm", "a","b","c"]
  filtered_customers:any = this.customer_list;
  ticket_list = [
    {id:"1", customer:"Findhome", cat:'hardware', subcat:'Incidència'},
    {id:"2", customer:"Findhome", cat:'hardware', subcat:'Material'},
    {id:"3", customer:"Findhome", cat:'hardware', subcat:'Material'},
    {id:"4", customer:"Findhome", cat:'hardware', subcat:'Incidència'},
    {id:"5", customer:"Findhome", cat:'hardware', subcat:'Material'}
  ]
  constructor(private ATicket:ATickets, public Router:Router) { }

  ngOnInit(): void {
  }

  showFormError(output:HTMLParagraphElement, error:string){
    output.classList.remove('hide')
    output.textContent = error;
  }
  hideFormError(output:HTMLParagraphElement){
    output.classList.add('hide')
    output.textContent = '';
  }
  async newTicket(btn:HTMLButtonElement, customer:string, desc:string, error_output:HTMLParagraphElement){
    btn.classList.add('loading');
    this.hideFormError(error_output);
    let customer_val:any = document.querySelector("input[name='input_client']");

    let cat = document.querySelector(".cat_option.active")?.textContent
    let subcat = document.querySelector(".subcat_option.active")?.textContent
    let ticket = {customer:customer_val?.value, cat, subcat, desc};

    try {
      let post = await this.ATicket.newTickets(ticket).toPromise();

      this.ticket_list.push(post.response)
      this.Router.navigateByUrl(`/tickets/${post.response.id}`)

    } catch(e:any){
      let error=''
      switch(e.status){
        case 422:
          error = 'No hi pot haver camps buits.'
          break;
        case 401:
          error = "No s'ha pogut crear el ticket."
          break;
        default:
          error = 'El servidor no ha pogut processar la sol·licitud. Prova-ho més tard.'
      }
      this.showFormError(error_output, error)
    }
    btn.classList.remove('loading');
  }

  navigate(id:string){
    this.Router.navigateByUrl(`/tickets/${id}`)
  }

  // Form Visual Actions
  inputFocus(box:HTMLElement, select_options:HTMLDivElement|null){ box.classList.add('focus'); box.classList.remove('error'); select_options ? select_options.classList.remove('hide'): ''; }
  inputBlur(box:HTMLElement, input:HTMLInputElement, select_options:HTMLDivElement|null){ 
    setTimeout(()=>{
      input.value == '' ? box.classList.remove('focus') : '';
      select_options ? select_options.classList.add('hide'): '';

    },250)
  }
  setActiveCat(catType:string, cat:HTMLDivElement){
    if(!cat.classList.contains('active')){
      document.querySelector(`.${catType}.active`)?.classList.remove('active');
      cat.classList.add('active');
    }
  }
  filterCustomer(value:string){
    this.filtered_customers = this.customer_list.filter((c:string) => c.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  }
  setClient(div:HTMLDivElement, input:HTMLInputElement, value:string){
    div.classList.add('hide')
    input.value = value;
  }
}
