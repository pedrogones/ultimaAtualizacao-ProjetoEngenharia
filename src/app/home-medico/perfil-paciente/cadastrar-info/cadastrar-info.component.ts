import { Component, OnInit } from '@angular/core';
import { PacienteInfoAdd } from 'src/app/models4/PacienteInfoAdd';
import { PacienteService } from 'src/app/pacienteService';
import { Paciente } from 'src/app/pacientes/paciente';
import { MedicoService } from 'src/app/services/medico.service';
import { SharedService } from 'src/app/shared.service';

 interface arrayzinho{
  doencasAnteriores: string;
  doencasCronicas: string;
  alergias: string;
  cirurgiasAnteriores: string;
  medicacoesAtuais: string;
  medicacoesAnteriores: string;
 }
@Component({
  selector: 'app-cadastrar-info',
  templateUrl: './cadastrar-info.component.html',
  styleUrls: ['./cadastrar-info.component.scss']
})
export class CadastrarInfoComponent implements OnInit {
  antecedentesMedicos: string='';
  medicamentosUsoAtual: string='';
  historicoPacienteCad: string='';
  observacoes: string='';
  pacienteSelecionado: Paciente | null = null; // Variável para armazenar o objeto do paciente selecionado
  public nomePaciente!: string; // Variáveis para armazenar informações do paciente
public idPaciente!:number
  cpf!: string;
  sexo!: string;
  endereco!: string; // Corrigido para "endereco"
  telCttEmergencia!: string;
  nomeCttEmergencia!: string;
  contatoPaciente!: string;
  doencasCronicasPaciente: string | undefined;
  cirurgiasAnterioresPaciente: string | undefined;
  medicacoesAtuaisPaciente: string | undefined;
  medicacoesAnterioresPaciente: string | undefined;
  doencasAnteriores: string = ''; // Inicialize com uma string vazia
doencasCronicas: string = ''; // Inicialize com uma string vazia
alergias: string = ''; // Inicialize com uma string vazia
cirurgiasAnteriores: string = ''; // Inicialize com uma string vazia
medicacoesAtuais: string = ''; // Inicialize com uma string vazia
medicacoesAnteriores: string = ''; // Inicialize com uma string vazia


  constructor(private sharedService: SharedService, private pacienteService: PacienteService, private medicoService: MedicoService) {}

  ngOnInit() {
    // Recupere o paciente selecionado do serviço
    this.pacienteSelecionado = this.pacienteService.getPacienteSelecionado();
    if (this.pacienteSelecionado) {
      console.log("Paciente:", this.pacienteSelecionado)
      this.nomePaciente = this.pacienteSelecionado.nomePaciente;
      this.idPaciente = this.pacienteSelecionado.idPaciente;
      this.contatoPaciente = this.pacienteSelecionado.contatoPaciente;
      this.cpf = this.pacienteSelecionado.cpf;
      this.sexo = this.pacienteSelecionado.sexo;
      this.endereco = this.pacienteSelecionado.endereco;
      this.telCttEmergencia = this.pacienteSelecionado.telCttEmergencia;
      this.nomeCttEmergencia = this.pacienteSelecionado.nomeCttEmergencia;

      console.log(this.idPaciente);

    } else {
      console.log("Paciente não encontrado"); // Lida com o caso em que o pacienteSelecionado é nulo ou indefinido
    }
  }
  verificaIsEmpty(): boolean {
    if (
      this.doencasAnteriores === '' ||
      this.doencasCronicas === '' ||
      this.alergias === '' ||
      this.cirurgiasAnteriores === '' ||
      this.medicacoesAtuais === '' ||
      this.medicacoesAnteriores === ''
    ) {
      return true; // Retorna true quando algum campo estiver vazio
    } else {
      return false; // Retorna false quando todos os campos estiverem preenchidos
    }
  }

  callBack: {
    idPaciente?: { idPaciente: number } | undefined;
    doencasAnteriores?: string | undefined;
    doencasCronicas?: string | undefined;
    alergias?: string | undefined;
    cirurgiasAnteriores?: string | undefined;
    medicacoesAtuais?: string | undefined;
    medicacoesAnteriores?: string | undefined;
  } = {};

  cadastrar() {
    if (this.verificaIsEmpty()) {
      this.sharedService.dialogConfirm('Preencha todos os campos', false);
    } else {
      // Construa o objeto de informações adicionais com os dados preenchidos
      const infoAdd: Partial<PacienteInfoAdd> = {
        idPaciente: {
          idPaciente: this.idPaciente
        },
        doencasAnteriores: this.doencasAnteriores,
        doencasCronicas: this.doencasCronicas,
        alergias: this.alergias,
        cirurgiasAnteriores: this.cirurgiasAnteriores,
        medicacoesAtuais: this.medicacoesAtuais,
        medicacoesAnteriores: this.medicacoesAnteriores
      };

      // Chame a função do serviço para cadastrar as informações adicionais
      this.medicoService.cadastrarInfoAdd(infoAdd).subscribe(
        (pacienteInfoAdd) => {
          this.sharedService.dialogConfirm('Informações cadastradas com sucesso', true);
          console.log(infoAdd)

          // Limpe os campos ou realize outras ações após o cadastro bem-sucedido
          this.limparCampos();
        },
        (error) => {
          console.error('Erro ao cadastrar informações adicionais:', error);
          this.sharedService.dialogConfirm('Erro ao cadastrar informações adicionais', false);
        }
      );
    }
  }

  cancelar() {
   this.sharedService.redirectMeuPaciente(this.pacienteSelecionado)
  }
  // Função para limpar os campos após o cadastro
  limparCampos() {
    this.doencasAnteriores = '';
    this.doencasCronicas = '';
    this.alergias = '';
    this.cirurgiasAnteriores = '';
    this.medicacoesAtuais = '';
    this.medicacoesAnteriores = '';
    this.observacoes = '';
  }

}
