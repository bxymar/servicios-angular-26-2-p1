import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaNumeros } from '../components/lista-numeros/lista-numeros';

@Component({
  selector: 'app-root',
  imports: [ListaNumeros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('servicios-angular');
}
