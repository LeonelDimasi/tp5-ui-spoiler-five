import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { MainSeccionComponent } from './components/main-seccion/main-seccion.component';
import { PlaylistComponent } from './components/playlist/playlist.component';


const routes: Routes = [
  {path:'home',component:MainSeccionComponent},
  {path:'login',component:LoginComponent},
  {path:'**',pathMatch:'full',redirectTo:'login'},
  {path:'playlist',component:PlaylistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
