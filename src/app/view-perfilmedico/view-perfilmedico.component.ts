import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Data } from '@angular/router';
import { SharedService } from '../shared.service';
import { Medico } from '../medico/medico';
import { MedicoService } from '../services/medico.service';


interface ExameType {
  value: string;
  viewValue: string;
}
interface HoraDisponibilidade {
  [hora: number]: 'disponível' | 'indisponível';
}

interface DiaDisponibilidade {
  [dia: string]: HoraDisponibilidade;
}
@Component({
  selector: 'app-view-perfilmedico',
  templateUrl: './view-perfilmedico.component.html',
  styleUrls: ['./view-perfilmedico.component.scss']
})
export class ViewPerfilmedicoComponent implements OnInit {
  public medicoService!: MedicoService;
  constructor(private sharedService: SharedService) {

  }
  ngOnInit(): void {
//    this.listarMedicos();
    this.strDataHoje = this.dataHoje.getFullYear() + '-' + (this.dataHoje.getMonth() + 1) + '-' + this.dataHoje.getDate()
  }

  agendarConsulta = true;
  verReserva = false;
  nome: string | null = null;
sobrenome: string | null = null;
email: string | null = null;
data: string | null = null;
horario: string | null = null;

  medico!:string
  strDataHoje!: string;


  exameTypes: ExameType[] = [
    { value: 'Check-up de Rotina', viewValue: 'Check-up de Rotina' },
    { value: 'Doenças Crônicas', viewValue: 'Doenças Crônicas' },
    { value: '', viewValue: '' },
    { value: 'Dor Persistente', viewValue: 'Dor Persistente' },
    { value: 'Check-up de Rotina', viewValue: 'Check-up de Rotina' },
    { value: 'Problemas Respiratórios', viewValue: 'Problemas Respiratórios' },
    { value: 'Infecções Recorrentes', viewValue: 'Infecções Recorrentes' },
    { value: 'Sintomas Gastrointestinais', viewValue: 'Sintomas Gastrointestinais' },
    { value: 'Problemas de Pele', viewValue: 'Problemas de Pele' },
    { value: 'Problemas de Visão', viewValue: 'Problemas de Visão' },
  ];
  motivoExame = this.exameTypes[2].value;

 listarMedicos(){
    this.medicoService.listarMedicos().subscribe(
      (medicos: Medico[]) => {
        // Extraia os nomes dos médicos e armazene-os no medicosArray
        this.medicosArray = medicos.map(medico => medico.nome);
        console.log(this.medicosArray.map.name)
      },
      (error: any) => {
        console.error('Erro ao listar médicos:', error);
      }
    );
  }


  medicosArray: string[] = []
  arrayMedicos: string[] = [
    'Dr. João Silva',
    'Dra. Maria Oliveira',
    'Dr. Carlos Santos',
    // esse array será o que vai ser puxado do banco de dados
  ];


  selectedMedico: string = this.arrayMedicos[0]; // Seleciona o primeiro médico por padrão
  agendarConsultaClick() {
    this.agendarConsulta = true;
    this.verReserva = false;
  }
  verReservaClick() {
    this.verReserva = true;
    this.agendarConsulta = false;
  }
  dataHoje = new Date();
  verificaDiaValido(data: string): boolean {
    const dataSelecionada = new Date(data);
    const hoje = new Date();

    // Verifique se a data selecionada é maior ou igual à data de hoje
    if (dataSelecionada >= hoje) {
      console.log(dataSelecionada + ' é maior ou igual a ' + hoje);
      return false;
    } else {
      return true;
    }
  }
  sendInfo() {
    if (
      this.selectedMedico === '' ||
      this.nome === null ||
      this.sobrenome === null ||
      this.email === null ||
      this.data === null ||
      this.horario === null ||
      this.motivoExame === ''
    ) {
      // Se algum campo obrigatório estiver em branco, exiba a mensagem de erro.
      this.sharedService.dialogConfirm("Preencha todos os campos", false);
    } else if (this.verificaDiaValido(this.data)) {
      this.sharedService.dialogConfirm('Você não pode marcar uma consulta nesse dia', false);
    } else {
      this.horario = this.horario + ':00';
      console.log(this.nome, this.sobrenome);
      console.log(this.email);
      console.log(this.dataHoje);
      console.log(this.data, this.horario);
      console.log(this.motivoExame);
      this.sharedService.dialogConfirm('Solicitação enviada', true);

      // Isso aqui abaixo reseta os campos preenchidos após a submissão das informações
      // É necessário que você envie para o banco de dados antes daqui
      this.nome = null;
      this.sobrenome = null;
      this.email = null;
      this.data = null;
      this.horario = null;
      this.motivoExame = '';
    }
  }
  canelar(){
    this.sharedService.redirectHomePaciente();
  }




}
