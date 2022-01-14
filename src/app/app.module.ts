import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartir/header/header.component';
import { FooterComponent } from './compartir/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { AboutComponent } from './paginas/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './compartir/inicio/inicio.component';
import { MiporfolioComponent } from './compartir/miporfolio/miporfolio.component';
import { MicontactoComponent } from './compartir/micontacto/micontacto.component';
import { MiserviciosComponent } from './compartir/miservicios/miservicios.component';
import { AcercademiComponent } from './compartir/acercademi/acercademi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PortafolioComponent,
    AboutComponent,
    InicioComponent,
    MiporfolioComponent,
    MicontactoComponent,
    MiserviciosComponent,
    AcercademiComponent,
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
