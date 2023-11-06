import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './pacientes/paciente';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private apiUrl = '/api/paciente'; // Use a URL da sua API
  constructor(private http: HttpClient) {}
  private pacienteSelecionado!: Paciente;
  private pacienteNome: string = '';

  setPacienteSelecionado(paciente: Paciente) {
    this.pacienteSelecionado = paciente;
  }

  getPacienteSelecionado() {
    return this.pacienteSelecionado;
  }

  setPacienteNome(nome: string) {
    this.pacienteNome = nome;
  }

  getPacienteNome() {
    return this.pacienteNome;
  }


  cadastrarPaciente(pacienteData: any) {
    return this.http.post(`${this.apiUrl}`, pacienteData);
  }

}
