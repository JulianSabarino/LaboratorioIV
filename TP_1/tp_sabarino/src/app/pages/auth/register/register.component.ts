import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  logo = "/assets/logo.png"; 
  
  rooter = inject(Router);

  RootPath(path:string)
  {
    this.rooter.navigate([path]);
  }
}
