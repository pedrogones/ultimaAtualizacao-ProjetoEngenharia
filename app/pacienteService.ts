import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private apiUrl = '/api/paciente'; // Use a URL da sua API

  constructor(private http: HttpClient) {}
  private pacienteSelecionado: any;

  setPacienteSelecionado(paciente: any) {
    this.pacienteSelecionado = paciente;
  }

  getPacienteSelecionado() {
    return this.pacienteSelecionado;
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
