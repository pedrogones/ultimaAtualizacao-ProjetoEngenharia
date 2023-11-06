import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; // Certifique-se de importar o Injectable
import { Observable } from "rxjs";
import { Paciente } from "../pacientes/paciente";

@Injectable()
export class PacienteServicesService {

  private readonly API = '/api/pacientes'; // Corrija a URL da API

  constructor(private httpClient: HttpClient) {}

  cadastrarPaciente(paciente: Partial<Paciente>): Observable<Paciente> {
    return this.httpClient.post<Paciente>(`${this.API}/salvar`, paciente); // Use o método POST
  }

  atualizarPaciente(paciente: Partial<Paciente>, id: number): Observable<Paciente> {
    return this.httpClient.put<Paciente>(`${this.API}/${id}`, paciente); // Use o método PUT
  }

  pegarPorNome(nome: string): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.API}/busca/${nome}`); // Use o método GET
  }

  list(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(`${this.API}/listar`)
      .pipe(
        // Remova o delay e first se não for necessário
      );
  }
}
