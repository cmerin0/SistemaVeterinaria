import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/Registro.service';
import { Registro } from '../../models/Registro';  
import { exit } from 'process';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css']
})
export class NuevoRegistroComponent implements OnInit {

  miRegistro;
  registroEncontrado;

  myId = 103;
  costo : number = 0;
  t: number = 0;
  m: number = 0;
  misRegistros : Registro[];
  off: number = 0;

  nuevoRegistro = {
    id : 0,
    nombre : "",
    dui: "",
    mascota : "",
    tratamiento : "",
    medicamento : "",
    costo : 0,
    visita : 0
  }

  constructor(private listadeRegistro : RegistroService) { }

  ngOnInit(): void {
    this.misRegistros = this.listadeRegistro.getRegistros();
  }

  getCost(){
    
    switch (this.nuevoRegistro.tratamiento) {
      case "1": this.t = 10; break;
      case "2": this.t = 20; break;
      case "3": this.t = 30; break;
      case "4": this.t = 40; break;
      default: this.t = 0; break;
    }
    switch (this.nuevoRegistro.medicamento) {
      case "1": this.m = 5; break;
      case "2": this.m = 10; break;
      case "3": this.m = 15; break;
      case "4": this.m = 10; break;
      default: this.m = 0; break;
    }

    this.costo = this.t + this.m;

  }

  private checkDui(dui:string){
    for (let registro of this.misRegistros) {
      if(dui === registro.dui){
        this.nuevoRegistro.visita = registro.visita + 1;
      }
      else{
        this.nuevoRegistro.visita = 1;
      }
    }
  }

  checkDescuento(visita:number){
    if (visita === 2 || visita === 3)
      this.off = 0.95
    else if (visita >= 4)
      this.off = 0.90
    else 
      this.off = 1

  }

  deleteRegistro(_id){
    this.listadeRegistro.deleteRegistro(_id);
  }

  getPositions(_dui){
    this.miRegistro = this.listadeRegistro.getRegistro(_dui);
    this.registroEncontrado = this.miRegistro;
  }

  editRegistro(){
    this.listadeRegistro.editRegistro(this.registroEncontrado);
  }

  registrar(){

    if(this.nuevoRegistro.nombre === "" || this.nuevoRegistro.dui === "" || this.nuevoRegistro.mascota === "")
      exit();
    else
      if (this.nuevoRegistro.tratamiento === "" && this.nuevoRegistro.medicamento === "") 
        exit();
    
    //Seteando el ID 
    this.nuevoRegistro.id = this.myId++;

    //Chekeando el DUI si ya ha visitado antes
    this.checkDui(this.nuevoRegistro.dui);

    //Checkeando si aspira a descuento 
    this.checkDescuento(this.nuevoRegistro.visita);

    //Asignando tratamiento
    switch (this.nuevoRegistro.tratamiento) {
      case "1": this.nuevoRegistro.tratamiento = "Baño Normal"; break;
      case "2": this.nuevoRegistro.tratamiento = "Baño Completo"; break;
      case "3": this.nuevoRegistro.tratamiento = "Contra Pulgas"; break;
      case "4": this.nuevoRegistro.tratamiento = "Contra Garrapatas"; break;
    }
    //Asignando medicamento
    switch (this.nuevoRegistro.medicamento) {
      case "1": this.nuevoRegistro.medicamento = "Shampoo Normal"; break;
      case "2": this.nuevoRegistro.medicamento = "Baño Completo"; break;
      case "3": this.nuevoRegistro.medicamento = "Contra Pulgas"; break;
      case "4": this.nuevoRegistro.medicamento = "Contra Garrapatas"; break;
    }

    //Setenado el costo y aplicando descuento
    this.nuevoRegistro.costo = this.costo * this.off; 

    //Agregando nuevo registro
    this.listadeRegistro.addRegistro(this.nuevoRegistro);

    //Vaciando el nuevo registro para poder agregar otro
    this.costo = 0;
    this.nuevoRegistro = {
      id : this.myId,
      nombre : "",
      dui: "",
      mascota : "",
      tratamiento : "",
      medicamento : "",
      costo : 0,
      visita : 0
    }
  }

}
