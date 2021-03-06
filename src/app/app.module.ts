import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainSeccionComponent } from './components/main-seccion/main-seccion.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { LoginComponent } from './components/login/login.component';
import { PriceTableComponent } from './components/popups/price-table/price-table.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { LahamburguesaComponent } from './components/lahamburguesa/lahamburguesa.component';
import { FaqAccordionComponent } from './components/faq-accordion/faq-accordion.component';
import { QualificationComponent } from './components/popups/qualification/qualification.component';
import { QuestionComponent } from './components/popups/question/question.component';
import { QualificationPlaylistComponent } from './components/popups/qualification-playlist/qualification-playlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainSeccionComponent,
    ControlBarComponent,
    LoginComponent,
    PriceTableComponent,
    PlaylistComponent,
    LahamburguesaComponent,
    FaqAccordionComponent,
    QualificationComponent,
    QuestionComponent,
    QualificationPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
    
  ],
  providers: [
   
       
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
