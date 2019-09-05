import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
@Component({
  selector: 'app-cuck',
  templateUrl: './cuck.component.html',
  styleUrls: ['./cuck.component.scss']
})
export class CuckComponent implements OnInit {
  datos: any;
  constructor(private service: BaseService) { }

  ngOnInit() {
    this.service.getPubli().subscribe(data=>{
      this.datos = data;
    })
  }
 

}
