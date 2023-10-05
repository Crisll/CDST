import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MTareas } from '../modelos/tareas';

@Injectable({
  providedIn: 'root'
})
export class STareas {
  obtenerTarea(id: string) {
    throw new Error('Method not implemented.');
  }
  guardarTarea(TAREA: MTareas) {
    throw new Error('Method not implemented.');
  }
  editarTarea(id: string, TAREA: MTareas) {
    throw new Error('Method not implemented.');
  }

  url= 'http://localhost:3700/api/cursos/'

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarCurso(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarCurso(curso: MTareas): Observable<any> {
    return this.http.post(this.url, curso);
  }

  obtenerCurso(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCurso(id: string, curso: MTareas): Observable<any>{
    return this.http.put(this.url + id, curso)

  }
}
