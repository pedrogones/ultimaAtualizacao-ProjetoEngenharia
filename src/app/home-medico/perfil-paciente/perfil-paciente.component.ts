import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteService } from 'src/app/pacienteService';
import { Paciente } from 'src/app/pacientes/paciente';
import { MedicoService } from 'src/app/services/medico.service';
import { HistoricoExames } from 'src/app/models5/historicoExames';
import { InfoAdd } from 'src/app/models4/infoAdd';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})

export class PerfilPacienteComponent implements OnInit {
  pacienteSelecionado: Paciente | null = null;
  nomePaciente: string = '';
  idPaciente: number = 0;
  contatoPaciente: string = '';
  dataNascPaciente: string = '';
  cpf: string = '';
  sexo: string = '';
  endereco: string = '';
  telCttEmergencia: string = '';
  nomeCttEmergencia: string = '';

  infoAddTaked: InfoAdd = {
    idHistorico: 0,
    idPaciente: 0,
    doencasAnteriores: '',
    doencasCronicas: '',
    alergias: '',
    cirurgiasAnteriores: '',
    medicacoesAtuais: '',
    medicacoesAnteriores: ''
  };

  displayedColumnsHistorico: string[] = ['nome','url'];
  dataSourceHistorico = new MatTableDataSource<HistoricoExames>();

  constructor(
    private pacienteService: PacienteService,
    private sharedService: SharedService,
    private medicoService: MedicoService
  ) {}

  ngOnInit() {
    this.pacienteSelecionado = this.pacienteService.getPacienteSelecionado();
    if (this.pacienteSelecionado) {
      this.nomePaciente = this.pacienteSelecionado.nomePaciente;
      this.idPaciente = this.pacienteSelecionado.idPaciente;
      this.contatoPaciente = this.pacienteSelecionado.contatoPaciente;
      this.dataNascPaciente = this.pacienteSelecionado.dataNascPaciente || '';
      this.cpf = this.pacienteSelecionado.cpf || '';
      this.sexo = this.pacienteSelecionado.sexo || '';
      this.endereco = this.pacienteSelecionado.endereco || '';
      this.telCttEmergencia = this.pacienteSelecionado.telCttEmergencia || '';
      this.nomeCttEmergencia = this.pacienteSelecionado.nomeCttEmergencia || '';
    } else {
      console.log('Paciente não encontrado');
    }

    this.medicoService.pegarInfoAdd(this.idPaciente).subscribe(
      (pegandoInfo) => {
        if (Array.isArray(pegandoInfo) && pegandoInfo.length > 0) {
          this.infoAddTaked = pegandoInfo[pegandoInfo.length - 1];
        } else {
          console.error('A lista de informações está vazia ou não é um array válido.');
        }
      },
      (error) => {
        console.error('Erro ao buscar info ADD:', error);
      }
    );

    this.medicoService.historicoExames(this.idPaciente).subscribe(
      (historico) => {
        const historicoArray: HistoricoExames[] = historico.map((item: any) => {
          return {
            nome: item.nome,
            url: item.url,
            type: item.type || null,
            size: item.size || 0,
            paciente: null,
            nomePaciente: null,
            idPaciente: null,
            pacienteDTO: {
              idPaciente: item.pacienteDTO?.idPaciente || 0,
              nomePaciente: item.pacienteDTO?.nomePaciente || null,
              dataNascPaciente: item.pacienteDTO?.dataNascPaciente || null,
              cpf: item.pacienteDTO?.cpf || null,
              sexo: item.pacienteDTO?.sexo || null,
              endereco: item.pacienteDTO?.endereco || null,
              telCttEmergencia: item.pacienteDTO?.telCttEmergencia || null,
              nomeCttEmergencia: item.pacienteDTO?.nomeCttEmergencia || null,
              contatoPaciente: item.pacienteDTO?.contatoPaciente || null,
              exames: item.pacienteDTO?.exames || null
            },
            medico: null,
            medicoDTO: null
          };
        });
        this.dataSourceHistorico.data = historicoArray;
      },
      (error) => {
        console.error('Erro ao buscar Histórico', error);
      }
    );
  }

  redirectHomeMedico() {
    this.sharedService.redirectHomeMedico();
  }

  cadstrarInformacoes() {
    this.sharedService.redirectCadInfoPaciente(this.pacienteSelecionado);
  }
}
