import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/pacienteService'; // Importa o serviço para acessar o objeto do paciente

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})
export class PerfilPacienteComponent implements OnInit {
  pacienteSelecionado: any; // Variável para armazenar o objeto do paciente

  constructor(private pacienteService: PacienteService) {} // Injeta o serviço de paciente

  ngOnInit() {
    // No momento da inicialização do componente, recupera o paciente selecionado do serviço
    this.pacienteSelecionado = this.pacienteService.getPacienteSelecionado();
    console.log(this.pacienteSelecionado); // Exibe o paciente selecionado no console para fins de depuração
  }


}
