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
 loginPaciente(usuario: string, senha: string) {
    // Construa a URL correta sem a parte "login"
  const url = `${this.apiUrl}/paciente?usuario=${usuario}&senha=${senha}`;

  // Faça uma solicitação POST em vez de GET para enviar as credenciais
  return this.http.post(url, {});
  }

  cadastrarPaciente(pacienteData: any) {
    return this.http.post(`${this.apiUrl}`, pacienteData);
  }

}
