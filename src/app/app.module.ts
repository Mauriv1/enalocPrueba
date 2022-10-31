import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActuacionDoblajeComponent } from './components/actuacion-doblaje/actuacion-doblaje.component';
import { SesionesOnlineComponent } from './components/sesiones-online/sesiones-online.component';
import { NuestrosTalentosComponent } from './components/nuestros-talentos/nuestros-talentos.component';
import { NavComponent } from './components/nav/nav.component';
import { FootComponent } from './components/foot/foot.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ActuacionDoblajeComponent,
    SesionesOnlineComponent,
    NuestrosTalentosComponent,
    NavComponent,
    FootComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
