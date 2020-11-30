import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { FaqAccordionComponent } from './components/faq-accordion/faq-accordion.component';
import { MainSeccionComponent } from './components/main-seccion/main-seccion.component';
import { PlaylistComponent } from './components/playlist/playlist.component';



const routes: Routes = [
  {path:'home',component:MainSeccionComponent},
  {path:'faqs',component:FaqAccordionComponent},
  {path:'login',component:LoginComponent},
  {path:'playlist',component:PlaylistComponent},
  {path:'playlist/:id',component:PlaylistComponent},
 // {path:'**',pathMatch:'full',redirectTo:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
