import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './project/components/views/login-page/login-page.component';
import { TmpComponent } from './project/components/views/tmp/tmp.component';
import { AuthGuard } from './project/model/implementation/authGuard';

const routes: Routes = [
  { path:'', component:LoginPageComponent },
  { path: 'home', component:TmpComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
