import { Injectable } from '@angular/core';
import { Registro } from '../models/Registro';

const ListadodeRegistros = [
  {
    "id" : 100,
    "nombre" : "Rebeca Merino",
    "dui" : "2287",
    "mascota" : "Chleo",
    "tratamiento" : "Baño Normal",
    "medicamento" : "",
    "costo" : 10,
    "visita" : 3
  },
  {
    "id" : 101,
    "nombre" : "Pablito Jovel",
    "dui" : "3821",
    "mascota" : "Nilo",
    "tratamiento" : "Contra Pulgas",
    "medicamento" : "Desparasitante",
    "costo" : 45,
    "visita" :1
  },
  {
    "id" : 102,
    "nombre" : "Roberto Zelaya",
    "dui" : "4281",
    "mascota" : "Alana",
    "tratamiento" : "Baño Especial",
    "medicamento" : "Shampoo Normal",
    "costo" : 25, 
    "visita" : 5
  }
];

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }

  public getRegistros(){
    return ListadodeRegistros;
  }

  getRegistro(_dui){
    return ListadodeRegistros.find(registro => registro.dui === _dui);
  }

  addRegistro(registro:Registro){
    ListadodeRegistros.push(registro);
  }

  editRegistro(newRegistroEdit){
    const index = ListadodeRegistros.findIndex(registro => registro.id === newRegistroEdit.id);
    console.log("ESTE ES EL REGISTRO " + index)
    ListadodeRegistros[index] = newRegistroEdit;
  }
  
  deleteRegistro(_id){
    ListadodeRegistros.splice(_id, 1);
  }

  addVisita(duiNuevo){
    return 0; 
  }

}
