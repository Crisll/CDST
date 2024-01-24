import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MTareas } from '../modelos/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  url= 'http://localhost:3700/api/tareas/'
  constructor(private http: HttpClient) { }

  crearTarea(tarea: MTareas): Observable<any> {
    return this.http.post(this.url, tarea);
  }

  obtenerTarea(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  obtenerTareas(): Observable<any>{
    return this.http.get(this.url)
  }

  actualizarTarea(id: string, tarea: MTareas): Observable<any>{
    return this.http.put(this.url + id, tarea)
  }

  eliminarTarea(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}