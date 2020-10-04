import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/Registro.service';
import { Registro } from '../models/Registro';  
import * as printJS from 'print-js';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  registros = null;
  searchText = '';
  registrosJSON : JSON;

  constructor(private registroServicio : RegistroService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.registroServicio.getAllData().subscribe(result => this.registros = result);
    
  }

  printTicket(){
    this.registrosJSON = JSON.parse(JSON.stringify(this.registros));
    printJS({
      printable: this.registrosJSON, 
      properties: ['id', 'nombre', 'mascota', 'visita', 'costo'], 
      type: 'json',
      header: '<h3 class="custom-h3">Ticket de Pagos</h3>',
      style: '.custom-h3 { color: blue; }',
      gridHeaderStyle: 'color: black;  border: 2px solid #3971A5;',
      gridStyle: 'border: 2px solid #3971A5;'
    });
  }

}
