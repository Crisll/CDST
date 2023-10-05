import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { STareas } from '../servicios/tareas';
import { MTareas } from '../modelos/tareas';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})

export class TareasComponent implements OnInit {
  title = 'UF1845-E2';
  longText = `Esto es una descripción de la tarea asignada del alumno. Aquí están los detalles y comentarios de la tarea.`;
  tareaForm: FormGroup;
  titulo = "Crear tarea";
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _STareas: STareas,
              private aRouter: ActivatedRoute) { 
    this.tareaForm = this.fb.group({
      name: ['', Validators.required],
      idtask: ['', Validators.required],
      desctask: ['', Validators.required],
      score: ['', Validators.required],
      state: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
}
agregarTarea() {

  const TAREA: MTareas = {
    name: this.tareaForm.get('name')?.value,
    idtask: this.tareaForm.get('idtask')?.value,
    desctask: this.tareaForm.get('desctask')?.value,
    score: this.tareaForm.get('score')?.value,
    state: this.tareaForm.get('state')?.value
  }

  if(this.id !== null){
    // Editamos Tarea

    this._STareas.editarCurso(this.id, TAREA).subscribe(data =>{
      this.toastr.info('La tarea fue actualizada con exito!', 'Tarea Actualizada!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.tareaForm.reset();
    })
  } else{
    // Agregamos Tarea
    console.log(TAREA);
      this._STareas.guardarCurso(TAREA).subscribe(data => {
      this.toastr.success('La tarea fue registrada con exito!', 'Tarea Registrada!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.tareaForm.reset();
    })
  }
}

esEditar() {
  if(this.id !== null) {
    this.titulo = 'Editar curso';
    this._STareas.obtenerCurso(this.id).subscribe(data => {
      this.tareaForm.setValue({
        name: data.name,
        idtask: data.idtask,
        desctask: data.desctask,
        score: data.score,
        state: data.state
      })
    })
  }
}
}
