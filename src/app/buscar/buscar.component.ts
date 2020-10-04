import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/Registro.service';
import { Registro } from '../models/Registro';  

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  registros = null;
  searchText = '';

  constructor(private registroServicio : RegistroService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.registroServicio.getAllData().subscribe(result => this.registros = result);
  }

}
