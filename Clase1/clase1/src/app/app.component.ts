import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clase1';
  edadUno: number = 0;
  edadDos: number = 0;
  suma: number = 0;
  promedio: number = 0;
  mostrarResultados: boolean = false;

  calcular() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
    this.mostrarResultados = true;
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
    this.mostrarResultados = false;
  }
}