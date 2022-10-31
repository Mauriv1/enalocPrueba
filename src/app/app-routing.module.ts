import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuacionDoblajeComponent } from './components/actuacion-doblaje/actuacion-doblaje.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NuestrosTalentosComponent } from './components/nuestros-talentos/nuestros-talentos.component';


import { SesionesOnlineComponent } from './components/sesiones-online/sesiones-online.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'inicio'},
  {path:'inicio', component: InicioComponent},
  {path:'actuacion-doblaje', component: ActuacionDoblajeComponent},
  {path:'sesiones-online', component: SesionesOnlineComponent},
  {path:'nuestros-talentos', component: NuestrosTalentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
