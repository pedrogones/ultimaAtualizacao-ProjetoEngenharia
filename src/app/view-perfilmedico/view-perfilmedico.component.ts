import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Data } from '@angular/router';
import { SharedService } from '../shared.service';


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
  constructor(private sharedService: SharedService) {

  }
  ngOnInit(): void {
    this.strDataHoje = this.dataHoje.getFullYear() + '-' + (this.dataHoje.getMonth() + 1) + '-' + this.dataHoje.getDate()
  }

  agendarConsulta = true;
  verReserva = false;
  nome!: string;
  sobrenome!: string;
  email!: string;
  data!: string;
  horario!: string;
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
  selectedExame = this.exameTypes[2].value;

  medicoTypes: string[] = [
    'Dr. João Silva',
    'Dra. Maria Oliveira',
    'Dr. Carlos Santos',
    // esse array será o que vai ser puxado do banco de dados

  ];

  selectedMedico: string = this.medicoTypes[0]; // Seleciona o primeiro médico por padrão
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
    if (this.strDataHoje >= data) {
      return true
    } else {
      return false

    }
  }
  sendInfo() {
    if (
      this.selectedMedico === '' ||
      this.nome === '' ||
      this.email === '' ||
      this.sobrenome === '' ||
      this.data === '' ||
      this.horario === '' ||
      this.selectedExame === ''
    ) {
      // Se todos os campos estiverem em branco, exiba a mensagem de erro.
      this.sharedService.dialogConfirm("Preencha todos os campos", false);
    } else if (this.verificaDiaValido(this.data)) {
      this.sharedService.dialogConfirm('Você não pode marcar uma consulta nesse dia', false)
    } else {
      this.verificaDiaValido(this.data)
      this.horario = this.horario + ':00'
      console.log(this.nome, this.sobrenome);
      console.log(this.email);
      console.log(this.dataHoje);
      console.log(this.data, this.horario);
      console.log(this.selectedExame)
      this.sharedService.dialogConfirm('Solicitação enviada', true);

      //isso aqui abaixo reseta os campos preenchidos após a submissao das info
      //é necessário que tu envie para o banco de dados antes daqui
      this.nome = ''
      this.sobrenome = ''
      this.email = ''
      this.data = ''
      this.horario = ''
      this.selectedExame=''
    }
  }



}
