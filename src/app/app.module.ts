import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActuacionDoblajeComponent } from './components/actuacion-doblaje/actuacion-doblaje.component';
import { SesionesOnlineComponent } from './components/sesiones-online/sesiones-online.component';
import { NuestrosTalentosComponent } from './components/nuestros-talentos/nuestros-talentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    ActuacionDoblajeComponent,
    SesionesOnlineComponent,
    NuestrosTalentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
