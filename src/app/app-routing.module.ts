import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';


const routes: Routes = [
  //{path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'**',pathMatch:'full',redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
