import { Component, OnInit } from '@angular/core';
import { alumnoList } from '../modelos/alumnos';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  public ArrayAlumnos: Array<alumnoList>
  constructor (
    ){
      this.ArrayAlumnos = [
        new alumnoList ("Paco", "Merte", 5, "packomerte@gmail.com", "6016969", "FotoXD", true),
        new alumnoList ("Lola", "Mento", 8, "lolamento@gmail.com", "66642069", "fotitoXD", false)
    ]
  }
  ngOnInit(): void {
    console.log(this.ArrayAlumnos);
  }
  mostrarNombre()
  {
    alert("Paco Merte")
  }
  NombreInput = "Lola Mento"
}
