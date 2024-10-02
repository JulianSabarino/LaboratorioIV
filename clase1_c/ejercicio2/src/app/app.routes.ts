import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
},
{
    path: 'login',
    loadComponent: ()=> import('./components/login/login.component').then(m=>m.LoginComponent)
},
{
    path: 'bienvenido',
    loadComponent: ()=> import('./components/bienvenido/bienvenido.component').then(m=>m.BienvenidoComponent)
},
{
    path: 'error',
    loadComponent: ()=> import('./components/error/error.component').then(m=>m.ErrorComponent)
},];
