import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { CasaComponent } from './casa/casa.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTareasComponent,
    CasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
