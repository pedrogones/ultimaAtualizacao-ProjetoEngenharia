import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';


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
export class ViewPerfilmedicoComponent {
  agendarConsulta=true;
  verReserva=false;
  nome!:string;
  sobrenome!: string;
  email!:string;
  data!:string;
  horario!: string;



  exameTypes: ExameType[] = [
    {value: 'Check-up de Rotina-0', viewValue: 'Check-up de Rotina'},
    {value: 'Doenças Crônicas-1', viewValue: 'Doenças Crônicas'},
    {value: 'Dor Persistente-2', viewValue: 'Dor Persistente'},
    {value: 'Check-up de Rotina-3', viewValue: 'Check-up de Rotina'},
    {value: 'Problemas Respiratórios-4', viewValue: 'Problemas Respiratórios'},
    {value: 'Infecções Recorrentes-5', viewValue: 'Infecções Recorrentes'},
    {value: 'Sintomas Gastrointestinais-6', viewValue: 'Sintomas Gastrointestinais'},
    {value: 'Problemas de Pele-7', viewValue: 'Problemas de Pele'},
    {value: 'Problemas de Visão-8', viewValue: 'Problemas de Visão'},
  ];
  //para fins didáticos, vamos deixar alguns dias e horarios ja fixos, para alguns médicos (teremos 2, no maximo);
  semanaOutubro: DiaDisponibilidade = {
    '11 de outubro': {
      8: 'disponível',
      9: 'indisponível',
      10: 'disponível',
      12: 'indisponível',
      13: 'disponível',
      14: 'disponível',
      15: 'indisponível',
      16: 'indisponível'
    },
    '12 de outubro': {
      8: 'disponível',
      9: 'disponível',
      10: 'disponível',
      12: 'indisponível',
      13: 'indisponível',
      14: 'indisponível',
      16: 'disponível'
    },
    '13 de outubro': {
      8: 'disponível',
      9: 'disponível',
      10: 'disponível',
      12: 'indisponível',
      13: 'disponível',
      14: 'disponível',
      15: 'disponível',
      16: 'disponível'
    },
    '14 de outubro': {
      8: 'disponível',
      9: 'disponível',
      10: 'disponível',
      12: 'indisponível',
      13: 'disponível',
      14: 'disponível',
      15: 'disponível',
      16: 'disponível'
    },
    '15 de outubro': {
      8: 'disponível',
      9: 'disponível',
      10: 'disponível',
      12: 'indisponível',
      13: 'disponível',
      14: 'disponível',
      15: 'disponível',
      16: 'disponível'
    }
  };

  selectedExame = this.exameTypes[2].value;

  agendarConsultaClick(){
    this.agendarConsulta=true;
    this.verReserva=false;
  }
  verReservaClick(){
    this.verReserva=true;
    this.agendarConsulta=false;
  }

  sendInfo(){
    if(this.nome==null&&this.email==null&&this.sobrenome==null&&this.data==null&&this.horario==null&&this.selectedExame==null){
     alert("preencha todos os campos")
    }else{
    console.log(this.nome, this.sobrenome);
    console.log(this.email);
    console.log(this.data, this.horario);
    console.log(this.selectedExame)
  }
}



}
