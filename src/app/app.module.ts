import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './project/components/views/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardClientComponent } from './project/components/views/dashboard-client/dashboard-client.component';
import { HomeWorkerComponent } from './project/components/views/home-worker/home-worker.component';
import { BenefitsBarGraphComponent } from './project/components/reusables/graphics/benefits-bar-graph/benefits-bar-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardClientComponent,
    HomeWorkerComponent,
    BenefitsBarGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
