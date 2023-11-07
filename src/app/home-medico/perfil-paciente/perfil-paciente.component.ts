import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/pacienteService'; // Importa o serviço para acessar o objeto do paciente
import { Paciente } from 'src/app/pacientes/paciente';
import { SharedService } from 'src/app/shared.service';

export interface DadosPDF {
  tipoExame: string;
  medico: string;
  data: string;
}

const PDF_DATA: DadosPDF[] = [
    { tipoExame: 'Pressão arterial', medico: 'Dr. Smith', data: '2023-11-04' },
    { tipoExame: 'Dor de barriga', medico: 'Dra. Johnson', data: '2023-11-05' },
    { tipoExame: 'Exame de sangue', medico: 'Dr. Brown', data: '2023-11-06' },
    { tipoExame: 'Raio-X do pé', medico: 'Dra. Davis', data: '2023-11-07' },
    { tipoExame: 'Exame de urina', medico: 'Dr. Wilson', data: '2023-11-08' }
];
@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})

export class PerfilPacienteComponent implements OnInit {
  pacienteSelecionado: Paciente | null = null; // Variável para armazenar o objeto do paciente selecionado
  public nomePaciente!: string; // Variáveis para armazenar informações do paciente
  public idadePaciente!: string;
  public sexoPaciente!: string;
  public rgPaciente!: string;
  public doencaPaciente!: string;
  public alergiasPaciente!: string;
  public historicoPaciente!: string;
  public url_img!: string;

  constructor(private pacienteService: PacienteService, private sharedService: SharedService) {} // Injeta o serviço de paciente

  displayedColumns: string[] = ['tipoExame', 'medico', 'data'];
  dataSource = PDF_DATA; // Array de dados de exame em formato DadosPDF

  ngOnInit() {
    // Recupere o paciente selecionado do serviço
    this.pacienteSelecionado = this.pacienteService.getPacienteSelecionado();

    if (this.pacienteSelecionado) {
      console.log(this.pacienteSelecionado); // Exibe o paciente selecionado no console para fins de depuração
      this.nomePaciente = this.pacienteSelecionado.nomePaciente;
      this.sexoPaciente = this.pacienteSelecionado.sexo;
      this.rgPaciente = this.pacienteSelecionado.cpf;
    } else {
      console.log("Paciente não encontrado"); // Lida com o caso em que o pacienteSelecionado é nulo ou indefinido
    }
  }

  redirectHomeMedico() {
    this.sharedService.redirectHomeMedico();
  }
  cadstrarInformacoes(){
    this.sharedService.redirectCadInfoPaciente(this.pacienteSelecionado)
  }
}
