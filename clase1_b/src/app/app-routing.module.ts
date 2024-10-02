import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { BienvenidoComponent } from './components/bienvenido.component';
import { ErrorComponent } from './components/error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: '**', component: ErrorComponent } // Ruta de error por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }