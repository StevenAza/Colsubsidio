import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ListCli: Array<any>; 
  ths: Array<any> = [
    'Nombres',
    'Dirección',
    'Teléfono',
    'Cuentas',
    'Eliminar',
    'Editar'
  ]
  attr: Array<any> =[
    'nombre',
    'direccion',
    'telefono',
    'cuenta'
  ]
  textButton: string = "Registrar";
  isRegister: boolean = true;
  myForm: FormGroup;
  idItem: number;
  ShowR: boolean;
  tituloCard: string = "Registro de usuarios";

  constructor(private servicio: BaseService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ListUser();
    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required]]
      });
  }
  ListUser(){
    this.ListCli = this.servicio.getClientes();
    console.log(this.ListCli);
  }
  Eliminar(item){
      this.servicio.DeleteClientes(item);
  }
  Editar(ind){
    this.ShowR = true;
    this.myForm.get('nombre').setValue(ind.nombre);
    this.myForm.get('direccion').setValue(ind.direccion);
    this.myForm.get('telefono').setValue(ind.telefono);
    this.textButton = "Editar";
    this.isRegister = false;
    this.tituloCard = "Editar Usuarios";
  }
  Registrar(){
    if(this.isRegister){
      this.servicio.Agregar(this.myForm.value);
      this.myForm.reset();
    }else{
      this.servicio.Editar(this.myForm.value, this.idItem);
      this.myForm.reset();
    }

  }
  Show(){
    this.isRegister = true;
    this.ShowR = true;
    this.tituloCard = "Registro de usuarios";
    this.textButton = "registrar";
  }

  cancelar(){
    this.ShowR = false;
    this.myForm.reset;
    this.isRegister = true;
  }
}
