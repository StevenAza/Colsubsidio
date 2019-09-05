import { Injectable } from '@angular/core';
import { Clientes } from '../mocks/cliente.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private consul: HttpClient) { }
  getClientes(){
      return Clientes;
  }

  DeleteClientes(item){
    Clientes.splice(item, 1);
  }
  Agregar(obj){
    Clientes.push(obj);
  }
  Editar(obj, item){
    
    Clientes[item]['nombre'] = obj.nombre;
    Clientes[item]['direccion'] = obj.direccion;
    Clientes[item]['telefono'] = obj.telefono;
  }
  getPubli(){
    return this.consul.get("https://api.chucknorris.io/jokes/random");
  }
}
