// Módulos y Librerías
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
import { MTareas } from '../modelos/tareas'
import { TareasService } from '../servicios/tareas.service'

@Component({
  selector: 'app-crear-tareas',
  templateUrl: './crear-tareas.component.html',
  styleUrls: ['./crear-tareas.component.css']
})
export class CrearTareasComponent implements OnInit {
  tareaForm: FormGroup;
  titulo = 'Crear tarea';
    id: string | null;
    constructor(private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private _tareaService: TareasService,
                private aRouter: ActivatedRoute) { 
      this.tareaForm = this.fb.group({
        name: ['', Validators.required],
        idtask: ['', Validators.required],
        desctask: ['', Validators.required],
        score: ['', Validators.required],
        state: ['', Validators.required]
      })
      // this.esEditar();
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    
  
    ngOnInit(): void {
      this.esEditar();
    }
  
    agregarTarea() {
  
      const TAREAS: MTareas = {
        name: this.tareaForm.get('name')?.value,
        idtask: this.tareaForm.get('idtask')?.value,
        desctask: this.tareaForm.get('desctask')?.value,
        score: this.tareaForm.get('score')?.value,
        state: this.tareaForm.get('state')?.value
      }
  
      if(this.id !== null){
        // Editamos Tarea
        this._tareaService.actualizarTarea(this.id, TAREAS).subscribe(data =>{
          this.toastr.info('La tarea fue actualizada con exito!', 'Tarea Actualizada!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.tareaForm.reset();
        })
      } else{
        // Agregamos Tarea
        console.log(TAREAS);
          this._tareaService.crearTarea(TAREAS).subscribe(data => {
          this.toastr.success('La tarea fue registrado con exito!', 'Tarea Registrado!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.tareaForm.reset();
        })
      }
    }
    
    esEditar() {
      if(this.id !== null) {
        this.titulo = 'Editar tarea';
        this._tareaService.obtenerTarea(this.id).subscribe(data => {
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
