import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../medico/medico';

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
}
