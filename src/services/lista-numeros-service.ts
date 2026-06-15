import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaNumerosService {

  // Definir un array de numeros [29, 89, 31, 54.5]
  public listaNumeros: number[] = [29, 89, 21, 54.5];

  // Metodo para agregar un nuevo número al inicio de array
  public agregarNumeroInicio(): void{
    this.listaNumeros.unshift(20);
  }

  // Método para eliminar el ultimo número del array
  public eliminarUltimioNumero(): void{
    this.listaNumeros.pop();
  }
}