import { Component } from '@angular/core';
import { SharedService } from '../shared.service'; // Importa o serviço compartilhado
import { PacienteService } from '../pacienteService'; // Importa o serviço de paciente

@Component({
  selector: 'app-home-medico',
  templateUrl: './home-medico.component.html',
  styleUrls: ['./home-medico.component.scss']
})
export class HomeMedicoComponent {

  constructor(private sharedService: SharedService, private pacienteService: PacienteService) {
    // Injeta os serviços no componente
  }

  nomeMedico = 'Chimbinha'
  idadeMedico = '45 anos'
  areaAtuacao = 'Cardiologia'

  redirectCadReceita() {
    this.sharedService.redirectCadReceita();
  }

  redirectListaDePacientes() {
    this.sharedService.redirectListaDePacientes();

  }
  pacientes = [
    { nome: "Pedro Targino Gomes", idade: 30, sexo: "Masculino" },
    { nome: "Arthur Vieira", idade: 25, sexo: "Masculino" },
    { nome: "João Victor", idade: 28, sexo: "Masculino" },
    { nome: 'Cássio Vittori', idade: 35, sexo: "Masculino" }
  ];


  redirectPront() {
    this.sharedService.redirectProntuario1(); // Chama uma função do serviço de redirecionamento para o prontuário
  }

  // Função para definir o paciente selecionado e redirecionar para a tela do paciente
  redirectPerfilMeuPaciente(paciente: any) {
    this.pacienteService.setPacienteSelecionado(paciente); // Define o paciente selecionado usando o serviço de paciente
    this.sharedService.redirectMeuPaciente(paciente); // Chama a função do serviço de redirecionamento para a tela do paciente
  }
}
