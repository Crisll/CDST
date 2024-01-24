import { Injectable } from '@angular/core';
import { ServiciosBD} from '../modelos/lstServicios'

@Injectable({
  providedIn: 'root'
})
export class ListaserviciosService {
  private listaServicios: Array<ServiciosBD>
  constructor() { 
    this.listaServicios = [
                new ServiciosBD("007", "Guillotina","Una guillotina es un aparato diseñado para aplicar la pena capital por decapitación de manera eficiente. El dispositivo consiste en un marco de madera alto y vertical provisto de una pesada lama de acero con un filo oblicuo, suspendida en la parte superior.", 675,"./assets/media/guillotina.gif", true), 
                new ServiciosBD("069", "Verdugo a domicilio","Un verdugo es la persona encargada de llevar a cabo la ejecución de una persona condenada a la pena de muerte o penas corporales por la justicia civil o eclesiástica. Nuestro verdugo vendrá corriendo y ejecutará en un abrir y cerrar de ojos.", 2025,"./assets/media/execution.gif", true), 
                new ServiciosBD("420", "Pistoletazo","Una pistola es un arma de fuego corta diseñada para ser apuntada y disparada con una sola mano. Se usa una Colt que de un solo disparo incapacita al 100% el objetivo.", 4200,"./assets/media/deputy.gif", true),
                new ServiciosBD("666", "Meteorito","Un meteorito es un meteoroide que alcanza la superficie de un planeta debido a que no se desintegra por completo en la atmósfera. Es un impacto directo, eficaz que solo afecta al objeto (persona) impactada sin erosionar el entorno.", 69420,"./assets/media/conjurer.gif", true)
              ]
  }
  getServicios():Array<ServiciosBD>{
    return this.listaServicios
  }

}