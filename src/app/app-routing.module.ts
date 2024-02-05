import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './project/components/views/login-page/login-page.component';
import { AuthGuard } from './project/model/implementation/authGuard';
import { TicketsComponent } from './project/components/views/tickets/tickets.component';
import { TicketDetailsComponent } from './project/components/views/ticket-details/ticket-details.component';
import { DashboardComponent } from './project/components/views/dashboard/dashboard.component';

const routes: Routes = [
  { path:'', component:LoginPageComponent },
  { path: 'tickets', component:TicketsComponent, /* canActivate: [AuthGuard] */},
  { path: 'dashboard', component:DashboardComponent, /* canActivate: [AuthGuard] */},
  { path: 'tickets/:id', component:TicketDetailsComponent, /* canActivate: [AuthGuard] */},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
