import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit{

  constructor(){ }
    numero:number = 15;


  /**Funcion incrementar */
  incremento(){
    this.numero +=1;
  }
  /**Funcion decremento */
  decremento(){
    this.numero -=1;
  }

  /**Respuesta */
  Operacion(valor:number){
    this.numero +=valor;
  }

  ngOnInit(): void {
    
  }
}
