import { Component } from '@angular/core';
import { TicTacToeComponent } from '../../components/tic-tac-toe/tic-tac-toe.component';
import { HangedmanComponent } from '../../components/hangedman/hangedman.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TicTacToeComponent,HangedmanComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
