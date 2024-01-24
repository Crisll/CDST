import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { CasaComponent } from './casa/casa.component';

const routes: Routes = [
  {path: '', component: CasaComponent},
  {path: 'tareas', component: CrearTareasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
