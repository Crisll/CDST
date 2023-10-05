import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EjecucionComponent } from './ejecucion/ejecucion.component';
import { LoginComponent } from './login/login.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: "Contacto", component: ContactoComponent},
  {path: "Ejecucion", component: EjecucionComponent},
  {path: "Login", component: LoginComponent},
  {path: "Presupuesto", component: PresupuestoComponent},
  {path: "Registro", component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
