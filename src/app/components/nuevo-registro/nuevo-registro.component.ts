import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/Registro.service';
import { Registro } from '../../models/Registro';  
import { HttpClient } from '@angular/common/http';
import { exit } from 'process';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css']
})
export class NuevoRegistroComponent implements OnInit {

  registros = null;

  costo : number = 0;
  t: number = 0;
  m: number = 0;
  off: number = 0;
  cvisita : number = 1;


  reg = {
    id : 0,
    nombre : "",
    dui: "",
    mascota : "",
    tratamiento : "",
    medicamento : "",
    costo : this.costo,
    visita : 0
  }

  constructor(private registroServicio : RegistroService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  //FUNCIONES DE CLIENTE HTTP 

  getAllData(){
    this.registroServicio.getAllData().subscribe(result => this.registros = result);
  }

  insertData(){
    //Validaciones de campos vacios
    if(this.reg.nombre === "" || this.reg.dui === "" || this.reg.mascota === "")
      exit();
    else
      if (this.reg.tratamiento === "" && this.reg.medicamento === "") 
        exit();

    //Chekeando el DUI si ya ha visitado antes
    this.checkDui();

    //Checkeando si aspira a descuento 
    this.checkDescuento(this.reg.visita);

    //Setenado el costo y aplicando descuento
    this.reg.costo = this.costo * this.off;

    this.registroServicio.insertData(this.reg).subscribe(datos => {
      if (datos['resultado'] == 'ok') {
        alert(datos['mensaje']);
        this.getAllData();
        this.reg = {
          id : 0,
          nombre : "",
          dui: "",
          mascota : "",
          tratamiento : "",
          medicamento : "",
          costo : 0,
          visita : 0
        }
        this.cvisita = 1;
      }
    });
  }

  deleteData(id) {
    if (confirm('¿Esta Seguro de Eliminar el Registro?')) {
      this.registroServicio.deleteData(id).subscribe(datos => {
      if (datos['resultado'] == 'ok') {
        alert(datos['mensaje']);
        this.getAllData();
      }
      });
    }
  }

  updateData(){

    //Validaciones de campos vacios
    if(this.reg.nombre === "" || this.reg.dui === "" || this.reg.mascota === "")
      exit();
    else
      if (this.reg.tratamiento === "" && this.reg.medicamento === "") 
        exit();

    //Setenado el costo y aplicando descuento
    this.reg.costo = this.costo * this.off

    this.registroServicio.updateData(this.reg).subscribe(datos=> {
      if (datos['resultado'] == 'ok') {
        alert(datos['mensaje']);
        this.getAllData();
        this.reg = {
          id : 0,
          nombre : "",
          dui: "",
          mascota : "",
          tratamiento : "",
          medicamento : "",
          costo : 0,
          visita : 0
        }
      }
    });
  }

  getOneData(id) {
    this.registroServicio.getOneData(id).subscribe(result => this.reg = result[0]);
  }

  ThereisData() {
    return true;
  }

  getCost(){
    
    switch (this.reg.tratamiento) {
      case "1": this.t = 10; break;
      case "2": this.t = 20; break;
      case "3": this.t = 30; break;
      case "4": this.t = 40; break;
      default: this.t = 0; break;
    }
    switch (this.reg.medicamento) {
      case "1": this.m = 5; break;
      case "2": this.m = 10; break;
      case "3": this.m = 15; break;
      case "4": this.m = 10; break;
      default: this.m = 0; break;
    }

    this.costo = this.t + this.m;
  }

  private checkDui(){
    for (let r of this.registros) {
      alert("this.reg.dui="+this.reg.dui+" y el r.dui="+r.dui);
      if(this.reg.dui === r.dui){
        this.cvisita = this.cvisita + 1;
        alert("Entro y cuento visita" + this.cvisita + " veces");
      }
    }
    this.reg.visita = this.cvisita;
  }

  checkDescuento(visita:number){
    if (visita === 2 || visita === 3)
      this.off = 0.95
    else if (visita >= 4)
      this.off = 0.90
    else 
      this.off = 1
  }

}
