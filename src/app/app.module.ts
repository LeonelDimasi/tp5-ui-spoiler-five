import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { QualificationComponent } from './components/popups/qualification/qualification.component';


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
    QualificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
   
       
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
