import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ActivatedRoute, Data, Route } from '@angular/router';
import { SharedService } from '../shared.service';
import { Medico } from '../medico/medico';
import { MedicoService } from '../services/medico.service';
import { PacienteService } from '../services/paciente.service';
import { MarcarConsulta } from '../models2/marcarConsulta';

interface MedicoInfo {
  idMedico: any;
  nomeMedico: string;
}

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
  constructor(private route: ActivatedRoute, private sharedService: SharedService, private pacienteService: PacienteService, private medicoService: MedicoService) {

  }
  _idPaciente:number=2;
  ngOnInit(): void {


//    this.listarMedicos();
    this.strDataHoje = this.dataHoje.getFullYear() + '-' + (this.dataHoje.getMonth() + 1) + '-' + this.dataHoje.getDate()
    this.medicoService.listarMedicos().subscribe(
      (medicos: Medico[]) => {
        // Mapeie os nomes dos médicos e armazene-os no arrayMedicos
        this.arrayMedicos = medicos.map(medico => medico.nomeMedico);
        console.log(this.arrayMedicos);
      },
      (error: any) => {
        console.error('Erro ao listar médicos:', error);
      }
    );
  }
  medicosDisponiveis: Medico[] = [];
  medicoTypes: string[] = [];
  agendarConsulta = true;
  verReserva = false;
  nome: string | null = null;
  sobrenome: string | null = null;
  email: string | null = null;
  data: string | null = null;
  horario: string | null = null;
  medico!:string
  strDataHoje!: string;
  motivoExame!:string;
 arrayMedicos: string[]=[];


  selectedMedico=''
  indexMedicoSelecionado:number=0;
  onMedicoSelected(index: number) {
    this.indexMedicoSelecionado = index;
    console.log('Índice do médico selecionado:', this.indexMedicoSelecionado);
    // Faça o que você precisa com o índice selecionado aqui
  }

   // Seleciona o primeiro médico por padrão
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
      console.log(this.indexMedicoSelecionado)
      const consulta: MarcarConsulta = {
        idMedico: {
          idMedico:this.indexMedicoSelecionado+1
        },
        idPaciente: {
          idPaciente: this._idPaciente
        },
        dataConsulta: this.data+" "+this.horario,
        motivoConsulta: this.motivoExame
      }


      this.pacienteService.marcarConsulta(consulta).subscribe(
        async (response) => {
          console.log('Consulta realizada com sucesso:', response);
          this.sharedService.dialogConfirm('Consulta realizada com sucesso', true);
          // Você pode redirecionar o usuário para outra página aqui, se necessário
          await this.sharedService.callDelay(2000);
          this.sharedService.redirectHomePaciente();
        },
        (error) => {
          this.sharedService.dialogConfirm('Erro ao solicitar agendamento: ' + error, false);
          console.error('Erro ao solicitar agendamento:', error);
        }
      );

    }
  }


  canelar(){
    this.sharedService.redirectHomePaciente();
  }




}
