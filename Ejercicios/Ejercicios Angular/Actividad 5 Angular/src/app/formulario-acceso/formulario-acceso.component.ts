import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-acceso',
  templateUrl: './formulario-acceso.component.html',
  styleUrls: ['./formulario-acceso.component.css']
})
export class FormularioAccesoComponent {

  mostrarInput="";
  conseguirInput(val:string)
  {
    console.log("Test")
    this.mostrarInput=val
  }
}
