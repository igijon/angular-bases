import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() {
    //Se ejecuta antes de la renderización del mismo
    console.log('Constructor');
  }

  ngOnInit(): void {
    //Inicializar cosas
    console.log('ngOnInit');

  }

}
