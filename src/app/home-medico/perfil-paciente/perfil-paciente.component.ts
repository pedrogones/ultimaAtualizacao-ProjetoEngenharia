import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/pacienteService'; // Importa o serviço para acessar o objeto do paciente
import { Paciente } from 'src/app/pacientes/paciente';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})
export class PerfilPacienteComponent implements OnInit {
  pacienteSelecionado: Paciente | null = null; // Variável para armazenar o objeto do paciente selecionado
  public nomePaciente!:string
  public idadePaciente!:string
  public sexoPaciente!:string
  public rgPaciente!:string
  public doencaPaciente!:string
  public alergiasPaciente!:string
  public historicoPaciente!:string
  public url_img!:string


  constructor(private pacienteService: PacienteService, private sharedService: SharedService) {} // Injeta o serviço de paciente
  ngOnInit() {
    // Recupere o paciente selecionado do serviço
    this.pacienteSelecionado = this.pacienteService.getPacienteSelecionado();

    if (this.pacienteSelecionado) {
      console.log(this.pacienteSelecionado); // Exibe o paciente selecionado no console para fins de depuração
      this.nomePaciente = this.pacienteSelecionado.name;
      this.idadePaciente = this.pacienteSelecionado.idade;
      this.sexoPaciente = this.pacienteSelecionado.sexo;
      this.rgPaciente = this.pacienteSelecionado.rg;
      this.doencaPaciente = this.pacienteSelecionado.doencas;
      this.alergiasPaciente = this.pacienteSelecionado.alergico;
      this.historicoPaciente = this.pacienteSelecionado.historicoFamiliar;
      this.url_img = this.pacienteSelecionado.url_img;
    } else {
      console.log("Paciente não encontrado"); // Lida com o caso em que o pacienteSelecionado é nulo ou indefinido
    }
  }

  redirectHomeMedico(){
    this.sharedService.redirectHomeMedico()
  }
}
