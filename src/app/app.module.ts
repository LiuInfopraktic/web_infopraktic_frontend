import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './project/components/views/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BenefitsBarGraphComponent } from './project/components/reusables/graphics/benefits-bar-graph/benefits-bar-graph.component';
import { TicketsComponent } from './project/components/views/tickets/tickets.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketDetailsComponent } from './project/components/views/ticket-details/ticket-details.component';
import { TaskListComponent } from './project/components/reusables/dashboard/task-list/task-list.component';
import { DashboardComponent } from './project/components/views/dashboard/dashboard.component';
import { ElUserCardComponent } from './project/components/reusables/elements/el-user-card/el-user-card.component';
import { ElTaskCardComponent } from './project/components/reusables/elements/el-task-card/el-task-card.component';
import { DshFixatgeComponent } from './project/components/reusables/dashboard/dsh-fixatge/dsh-fixatge.component';
import { DshCalendarComponent } from './project/components/reusables/dashboard/dsh-calendar/dsh-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BenefitsBarGraphComponent,
    TicketsComponent,
    TicketDetailsComponent,
    TaskListComponent,
    DashboardComponent,
    ElUserCardComponent,
    ElTaskCardComponent,
    DshFixatgeComponent,
    DshCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
