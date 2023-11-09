import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../medico/medico';
import { ModeloConsulta } from '../models3/modeloConsulta';
import { Paciente } from '../pacientes/paciente';
import { PacienteByMedico } from '../models3/pacientesDoMedico';
import { PacientesDoMedico } from '../models4/pacientePorMedico';
import { PacienteInfoAdd } from '../models4/PacienteInfoAdd';
import { InfoAdd } from '../models4/infoAdd';
import { HistoricoExames } from '../models5/historicoExames';

@Injectable({
  providedIn: 'root'
})

export class MedicoService {
  private readonly API = '/api/medicos'; // Corrija a URL da API

  constructor(private httpClient: HttpClient) {}

  cadastrarMedico(medico: Partial<Medico>): Observable<Medico> {
    return this.httpClient.post<Medico>(`${this.API}/cadastrar`, medico); // Use o método POST
  }

  pegarPorNome(nome: string): Observable<Medico> {
    return this.httpClient.get<Medico>(`${this.API}/busca/${nome}`); // Use o método GET
  }
  listarMedicos(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(`${this.API}/listar`)
  }
  //esse aqui
  listarPaciente(_id:number): Observable<PacienteByMedico[]> {
    return this.httpClient.get<PacienteByMedico[]>(`/api/medicos/medicos/${_id}/pacientes`)
  }
  listarMedicosById(_id:number): Observable<Medico>{
    ///api/medicos/medicos/{idMedico}
    return this.httpClient.get<Medico>(`/api/medicos/medicos/${_id}`);//get method
  }
  enviarReceita(_idPaciente:number, _idMedico:number, fomrData: FormData):Observable<any>{
    return this.httpClient.post(`/api/receitas/upload/${_idMedico}/${_idPaciente}`, fomrData)
  }
  listarMedicamentos(){
    //essa não vai usar
  }
  //feito
  verConsultasById(_id:number):Observable<ModeloConsulta[]>{
    return this.httpClient.get<ModeloConsulta[]>(`/api/consultas/consultas/por-medico/${_id}`)
  }
  //fazendo
  pegarSeusPacientes(_id: number): Observable<PacientesDoMedico> {
    return this.httpClient.get<PacientesDoMedico>(`/api/medicos/medicos/${_id}/pacientes`)
  }
  //fazendo
cadastrarInfoAdd(paciente: Partial<PacienteInfoAdd>): Observable<PacienteInfoAdd> {
  return this.httpClient.post<PacienteInfoAdd>(`/api/historico/cadastrar`, paciente); // Use o método POST
}

pegarInfoAdd(_id:number): Observable<InfoAdd> {
  return this.httpClient.get<InfoAdd>(`/api/historico/listarPorIdPaciente/${_id}`)
}
historicoExames(_id: number):Observable<HistoricoExames[]>{
  return this.httpClient.get<HistoricoExames[]>(`/api/exames/paciente/${_id}`)
}
}
