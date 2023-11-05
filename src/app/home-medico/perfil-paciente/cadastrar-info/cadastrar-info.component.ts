import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/pacienteService';
import { Paciente } from 'src/app/pacientes/paciente';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cadastrar-info',
  templateUrl: './cadastrar-info.component.html',
  styleUrls: ['./cadastrar-info.component.scss']
})
export class CadastrarInfoComponent implements OnInit {
  constructor(private sharedService: SharedService, private pacienteService: PacienteService) {}

  pacienteSelecionado?: Paciente;
  public nomePaciente!: string;
  public idadePaciente!: string;
  public sexoPaciente!: string;
  public rgPaciente!: string;
  public doencaPaciente!: string;
  public antecedentesMedicos: string ='';
  public medicamentosUsoAtual: string ='';
  public historicoPacienteCad: string ='';
  public observacoes: string ='';
  public alergiasPaciente!: string;

  ngOnInit() {
    // Use o serviço para buscar o paciente selecionado
    this.pacienteSelecionado = this.pacienteService.getPacienteSelecionado();

    if (this.pacienteSelecionado) {
      // Preencha as informações do paciente com os dados do objeto do paciente
      this.nomePaciente = this.pacienteSelecionado.name;
      this.idadePaciente = this.pacienteSelecionado.idade;
      this.sexoPaciente = this.pacienteSelecionado.sexo;
      this.rgPaciente = this.pacienteSelecionado.rg;
      this.doencaPaciente = this.pacienteSelecionado.doencas;
      this.alergiasPaciente = this.pacienteSelecionado.alergico;
      console.log('Meu paciente: ' +this.nomePaciente)
    } else {
      console.log("Paciente não encontrado");
    }
  }
  verificaIsEmpty(): boolean {
    if (this.antecedentesMedicos === '' || this.medicamentosUsoAtual === '' || this.historicoPacienteCad === '' || this.observacoes === '') {
      return true; // Retorna true quando algum campo estiver vazio
    } else {
      return false; // Retorna false quando todos os campos estiverem preenchidos
    }
  }
  
  cadastrar() {
    if (this.verificaIsEmpty()) {
      this.sharedService.dialogConfirm('Preencha todos os campos', false);
    } else {
      this.sharedService.dialogConfirm('informações a cadastrar', true);
    }
  }
  

  cancelar() {
   this.sharedService.redirectMeuPaciente(this.pacienteSelecionado)
  }
}
