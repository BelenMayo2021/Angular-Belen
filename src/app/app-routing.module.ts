


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { AboutComponent } from './paginas/about/about.component';



const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  // no AGREGO MI MODULO

];

@NgModule({
  
/*   imports: [RouterModule.forRoot(routes, { useHash: true })], */


imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],

  exports: [RouterModule]
})

export class AppRoutingModule { 


}




/* [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],



00:34:55	Lean Arbelo:	de casualidad alguno pudo resolver lo que preguntaron la clase pasada sobre lo de que no te lleva al principio de la pagina cuando carga un componente?

00:36:12	María Morales:	profe, disculpe, recién puedo entrar

00:36:28	Juan Pablo Sandoval:	sisi en app.routing.module ts, pisa en el ngModule el imports con:

  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
import { InicioComponent } from './compartir/inicio/inicio.component';

00:36:52	Lean Arbelo:	genial! gracias
 */