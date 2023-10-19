import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.scss']
})
export class HomePacienteComponent implements OnInit {
  radioInicio!: HTMLInputElement; // Declare o tipo como HTMLInputElement ou null
  inicio: boolean = true;
  receita: boolean = false;
  prontuario: boolean = false;
  constructor(private sharedService: SharedService) {

  }
  ngOnInit(): void {

  }
  //função para lidar com as mudanças da div no feed
  onRadioChange(selectedOption: string) {
    // Quando um botão de rádio for alterado, desmarque os outros
    if (selectedOption === 'inicio') {
      this.receita = false;
      this.prontuario = false;
    } else if (selectedOption === 'receita') {
      this.inicio = false;
      this.prontuario = false;
    } else if (selectedOption === 'prontuario') {
      this.inicio = false;
      this.receita = false;
    }
  }
  //funcão para redirecionar ao perfil do seu médico
  redirectPerfilMedico() {
    this.sharedService.redirectPerfilMedico();
  }



  /// preeencher os campos de html pelo ts - facilita quando puxar do banco de dados

  //campos de informações do paciente que serão mostrados no perfil dele
  nome = 'Maria'
  sobrenome = 'Targino Gomes'
  nascimento = '15 de abril de 1985'
  sexo = 'Feminino'
  endereco = 'Rua das Flores, 123, Bairro Primavera, João Pessoa'
  //contato e emergencia
  telefone = '(55) 5555-5555'
  rg = '1234567'
  numeroParaEmergencia = '(55) 4444-4445'
  nomeContatoEmergencia = ' João Gomes (marido)'
  //Histórico Medico pessoal
  conMedica = ' Hipertensão'
  alergias = 'Nenhumas conhecidas'
  medUsoRegular = 'Losartana para controle da pressão arterial'

  //meidcações pescritas ao paciente,
  // pelo médico, que serão exibidas na tela:
  medicamentos = [
    //a nível de exemplo, criei uma tabela de medicamentos, contendo 3 medicamentos
    {
      nomeMedicamento: 'Atenolol',
      dataPrescricao: '28 de setembro de 2023',
      dosagem: '50 mg',
      posologia: 'Tomar 1 comprimido por via oral a cada manhã.',
      indicacoes: 'Tratamento da hipertensão arterial.'
    },
    {
      nomeMedicamento: 'Dipirona',
      dataPrescricao: '21 de agosto de 2023',
      dosagem: '15 mg',
      posologia: 'oral 3 vezes ao dia',
      indicacoes: 'Tratar inflamações locais como dor de cabeça',
    },
    {
      nomeMedicamento: 'Dramin',
      dataPrescricao: '28 de setembro de 2023',
      dosagem: '25 mg',
      posologia: 'Tomar 1 comprimido por via oral 2 vezes ao dia',
      indicacoes: 'Tratamento de enjoo ',
    }
  ];

  // listar aqui os campos do Prontuário do paciente:
  //-> Antecendentes Médicos:
  antecedente='Hipertensão arterial diagnosticada em 2010. Asma diagnosticada na infância, atualmente sob controle. Nenhuma alergia conhecida a medicamentos ou alimentos.'
  medicamentosAtuais='Atenolol 50 mg, uma vez ao dia, para controle da pressão arterial. Losartana 100 mg, uma vez ao dia, para controle da pressão arterial.  Inalador de Salbutamol, conforme necessário, para alívio dos sintomas de asma.'
  historicoMedico='Maria Targino Gomes realiza consultas médicas de rotina a cada seis meses com seu clínico geral para acompanhamento da hipertensão arterial e avaliação geral de saúde.'
  examesRecentes='Exame de sangue realizado em 15/09/2023: para monitoramento dos níveis de glicose e lipídios no sangue. Radiografia do tórax realizada em 10/09/2023: para avaliação dos pulmões devido a sintomas respiratórios.'
  observacoes='A paciente está comprometida com a adesão ao tratamento para hipertensão arterial e asma, tomando regularmente seus medicamentos e comparecendo às consultas de acompanhamento.'
  }
