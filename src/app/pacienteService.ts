import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './pacientes/paciente';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private apiUrl = '/api/paciente'; // Use a URL da sua API
  pacienteId: any;
  constructor(private http: HttpClient) {}
  private pacienteSelecionado!: Paciente;
  private pacienteNome: string = '';

  setPacienteSelecionado(paciente: Paciente) {
    this.pacienteSelecionado = paciente;
  }

  getPacienteSelecionado() {
    return this.pacienteSelecionado;
  }
  getIdPaciente(){
    return this.pacienteSelecionado.idPaciente
  }

  setPacienteNome(nome: string) {
    this.pacienteNome = nome;
  }

  getPacienteNome() {
    return this.pacienteNome;
  }

  getPacienteById(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`/api/pacientes/${id}`); // Substitua pela URL real da sua API
  }
  cadastrarPaciente(pacienteData: any) {
    return this.http.post(`${this.apiUrl}`, pacienteData);
  }

}
