import { Component, inject } from '@angular/core';
import { ListaNumerosService } from '../../services/lista-numeros-service';

@Component({
  selector: 'app-lista-numeros',
  imports: [],
  templateUrl: './lista-numeros.html',
  styleUrl: './lista-numeros.css',
})
export class ListaNumeros {
  
  public listaNumerosServicio = inject(ListaNumerosService);
}