import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../components/components.module';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        HomeComponent,
        MovimientoComponent,
        CuentaComponent
    ],
    imports: [
        ComponentModule,
        ReactiveFormsModule,
        BrowserModule
    ]
  
})
export class PagesModule{
}
