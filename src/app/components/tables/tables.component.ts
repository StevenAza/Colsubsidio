import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @Input() Data: Array<any>;
  @Input() Cabeceras: Array<any>;
  @Input() atributos: Array<any>;
  @Output() del = new  EventEmitter();
  @Output() edit = new  EventEmitter();
  @Output() id = new  EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  editar(obj, i){
    this.edit.emit(obj);
    this.id.emit(i);
  }
  eliminar(objE){
    this.del.emit(objE);
  }
}
