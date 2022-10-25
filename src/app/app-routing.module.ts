import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuacionDoblajeComponent } from './components/actuacion-doblaje/actuacion-doblaje.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NuestrosTalentosComponent } from './components/nuestros-talentos/nuestros-talentos.component';
import { PowerKidsComponent } from './components/power-kids/power-kids.component';
import { PowerTeensComponent } from './components/power-teens/power-teens.component';
import { SesionesOnlineComponent } from './components/sesiones-online/sesiones-online.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'inicio', component: InicioComponent},
  {path:'actuacion-doblaje', component: ActuacionDoblajeComponent},
  {path:'sesiones-online', component: SesionesOnlineComponent},
  {path:'nuestros-talentos', component: NuestrosTalentosComponent},
  {path:'power-kids', component: PowerKidsComponent},
  {path:'power-teens', component: PowerTeensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
