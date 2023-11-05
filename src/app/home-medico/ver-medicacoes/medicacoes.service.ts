import { Injectable } from '@angular/core';
import { MedicamentosInterface } from './medicamentosInterface';

@Injectable({
  providedIn: 'root'
})
export class MedicacoesService {

  constructor() { }
  private remedioSelecionado!: MedicamentosInterface;
  private nomeRemedio: string = '';

  setremedioSelecionado(paciente: MedicamentosInterface) {
    this.remedioSelecionado = paciente;
  }

  getremedioSelecionado() {
    return this.remedioSelecionado;
  }

  setnomeRemedio(nome: string) {
    this.nomeRemedio = nome;
  }

  getnomeRemedio() {
    return this.nomeRemedio;
  }
}
