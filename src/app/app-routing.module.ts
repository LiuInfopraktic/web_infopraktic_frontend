import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './project/components/views/login-page/login-page.component';
import { AuthGuard } from './project/model/implementation/authGuard';
import { DashboardClientComponent } from './project/components/views/dashboard-client/dashboard-client.component';
import { HomeWorkerComponent } from './project/components/views/home-worker/home-worker.component';
import { TicketsComponent } from './project/components/views/tickets/tickets.component';
import { TicketDetailsComponent } from './project/components/views/ticket-details/ticket-details.component';

const routes: Routes = [
  { path:'', component:LoginPageComponent },
  { path: 'home', component:DashboardClientComponent, canActivate: [AuthGuard]},
  { path: 'tickets', component:TicketsComponent, /* canActivate: [AuthGuard] */},
  { path: 'tickets/:id', component:TicketDetailsComponent, /* canActivate: [AuthGuard] */},
  { path: 'admin', component:HomeWorkerComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
