import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovimientoComponent } from './pages/movimiento/movimiento.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'movimiento', component: MovimientoComponent},
    { path: 'cuenta', component: CuentaComponent},
    { path: 'home', component: HomeComponent  },
    { path: '*', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
