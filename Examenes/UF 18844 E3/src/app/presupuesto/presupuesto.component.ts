import { Component } from '@angular/core';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent {
  mostrarInput="";
  conseguirInput(val:string)
  {
    alert(this.mostrarInput=val)
    this.mostrarInput=val
  }
}
