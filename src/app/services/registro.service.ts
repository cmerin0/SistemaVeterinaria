import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../models/Registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url = "https://sistemaveterinariadps.000webhostapp.com/";

  constructor(private http: HttpClient) { }


  //FUNCIONES COMO CLIENTE HTTP (PHP)
  getAllData(){
    return this.http.get(`${this.url}select.php`);
  }

  insertData(registro){
    return this.http.post(`${this.url}insert.php`, JSON.stringify(registro));
  }

  deleteData(id:number){
    return this.http.get(`${this.url}delete.php?id=${id}`);
  }

  getOneData(id:number){
    return this.http.get(`${this.url}select_one.php?id=${id}`);
  }

  updateData(registro){
    return this.http.post(`${this.url}update.php`, JSON.stringify(registro));
  }

}
