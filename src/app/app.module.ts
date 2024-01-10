import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './project/components/views/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TmpComponent } from './project/components/views/tmp/tmp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TmpComponent
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
