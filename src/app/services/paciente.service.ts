import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../pacientes/paciente';
import { HttpClient } from '@angular/common/http';
import { HistoricoMedico } from '../models/historicoMedico';
import { ReceitasMedicas } from '../models/receitasMedicas';
import { SuasConsultas } from '../models2/suasConsultas';
import { Medico } from '../medico/medico';
import { MarcarConsulta } from '../models2/marcarConsulta';
import { PacienteInfoAdd } from '../models4/PacienteInfoAdd';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  getPacienteSelecionado(): Paciente | null {
    throw new Error('Method not implemented.');
  }

  private readonly API = '/api/pacientes'; // Atualize a URL completa
  constructor(private httpClient: HttpClient) { }
    //feito
  cadastrarPaciente(paciente: Partial<Paciente>): Observable<Paciente> {
    return this.httpClient.post<Paciente>(`${this.API}/salvar`, paciente); // Use o método POST
  }
  //feito
  pegarPorId(_id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.API}/busca/${_id}`); // Use o método GET
  }
  //feito
  pegarHistorico(_id: number): Observable<HistoricoMedico[]>{
    return this.httpClient.get<HistoricoMedico[]>(`/api/historico/listarPorIdPaciente/${_id}`); // Use o método GET
  }
  //feito
  pegarReceitas(_id: number): Observable<ReceitasMedicas[]>{
    return this.httpClient.get<ReceitasMedicas[]>(`/api/receitas/receitas-paciente/${_id}`); // Use o método GET
  }
//
// Feito
uploadExamRecentes(pacienteId: number, formData: FormData): Observable<any> {
  return this.httpClient.post(`/api/exames/upload/${pacienteId}`, formData);
}
//feito
suasConsultas(_id: number): Observable<SuasConsultas[]>{
  return this.httpClient.get<SuasConsultas[]>(`/api/consultas/por-paciente/${_id}`)
}
//feito
pegarMedicos():Observable <Medico[]>{
  return this.httpClient.get<Medico[]>(`/api/medicos/listar`)
}
//feito
marcarConsulta(consulta: Partial<MarcarConsulta>):Observable<MarcarConsulta> {
  return this.httpClient.post<MarcarConsulta>(`/api/consultas/marcar`, consulta); // Use o método POST
}

}
