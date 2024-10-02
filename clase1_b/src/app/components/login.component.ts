import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './user'; // Importa el modelo de Usuario


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = new Usuario('', '');
  errorLogin: boolean = false;

  constructor(private router: Router) { }

  ingresar() {
    // Aquí validarías el usuario y la contraseña (ejemplo simplificado)
    if (this.usuario.nombre === 'admin' && this.usuario.clave === '1234') {
      this.router.navigate(['/bienvenido']); // Redirige a Bienvenido si la autenticación es correcta
    } else {
      this.errorLogin = true;
    }
  }
}