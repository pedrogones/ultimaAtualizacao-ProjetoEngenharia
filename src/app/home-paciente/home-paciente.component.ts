import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatTableDataSource } from '@angular/material/table';

//aqui serão as info dos pdfs q o medico envia, os 3 campos que precisam conter, no mínimo
export interface Prescricoes {
  name: string;
  medico: string;
  data: string;
}
//popular o array com os campos que virão do banco de dados
const PDFS_PRESCRITOS: Prescricoes[] = [
  {name: 'Remedio para gripe', medico: 'Mário Silva', data: '26/10/2022'},
  {name: 'Remedio para o pé', medico: 'Ana Santos', data: '15/07/2021'},
  {name: 'Remedio para dor de cabeça', medico: 'Carlos Ferreira', data: '03/05/2023'},
  {name: 'Remedio para alergia', medico: 'Patricia Alves', data: '19/11/2020'},
  {name: 'Remedio para tosse', medico: 'Ricardo Rodrigues', data: '07/09/2022'},
  {name: 'Remedio para enjoo', medico: 'Isabel Ribeiro', data: '14/12/2021'},
  {name: 'Remedio para dor nas costas', medico: 'Paulo Gonçalves', data: '22/08/2023'},
  {name: 'Remedio para insônia', medico: 'Sandra Lima', data: '30/04/2019'},
  {name: 'Remedio para dor de estômago', medico: 'João Martins', data: '12/03/2022'},
  {name: 'Remedio para febre', medico: 'Mariana Sousa', data: '08/06/2020'}
];

//aqui serão as info dos pdfs q o medico envia, os 3 campos que precisam conter, no mínimo
export interface Consultas {
  motivo: string;
  medico: string;
  data: string;
  hora: string;
}
//popular o array com os campos que virão do banco de dados
const SUAS_CONSULTAS: Consultas[] = [
  {motivo: 'Preciso me examinar por conta da... gripe', medico: 'Mário Silva', data: '26/10/2022', hora: '08:00'},
  {motivo: 'Preciso me examinar por conta da... o pé', medico: 'Ana Santos', data: '15/07/2021', hora: '08:00'},
  {motivo: 'Preciso me examinar por conta da... dor de cabeça', medico: 'Carlos Ferreira', data: '03/05/2023', hora: '08:00'},
  {motivo: 'Preciso me examinar por conta da... alergia', medico: 'Patricia Alves', data: '19/11/2020', hora: '08:00'},
 ];
@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.scss']
})
export class HomePacienteComponent implements OnInit {
  radioInicio!: HTMLInputElement; // Declare o tipo como HTMLInputElement ou null
  inicio: boolean = true;
  observacao!:string;
  receita: boolean = false;
  prontuario: boolean = false;
  suasConsultas:boolean=false;
  mostrarMedicamentos:boolean =false;
  exameUpload:boolean =false;

  constructor(private sharedService: SharedService) {

  }
  medicoTypes: string[] = [
    'Dr. João Silva',
    'Dra. Maria Oliveira',
    'Dr. Carlos Santos',
    // esse array será o que vai ser puxado do banco de dados, aqui é mero exemplo
  ];
  selectedMedico: string = this.medicoTypes[0]; // Seleciona o primeiro médico por padrão

  ngOnInit(): void {

  }
  displayedColumnsPdfs: string[] = [ 'name', 'medico', 'data'];
  dataSourcePdfs = new MatTableDataSource(PDFS_PRESCRITOS);
  displayedColumnsSuasConsultas: string[] = [ 'motivo', 'medico', 'data', 'hora'];
  dataSourceSuasConsultas = new MatTableDataSource(SUAS_CONSULTAS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourcePdfs.filter = filterValue.trim().toLowerCase();
  }
  applyFilterConsulas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSuasConsultas.filter = filterValue.trim().toLowerCase();
  }


  //função para lidar com as mudanças da div no feed
  onRadioChange(selectedOption: string) {
    // Quando um botão de rádio for alterado, desmarque os outros
    if (selectedOption === 'inicio') {
      this.receita = false;
      this.prontuario = false;
      this.mostrarMedicamentos=false;
      this.exameUpload=false;
      this.suasConsultas=false;
    } else if (selectedOption === 'receita') {
      this.inicio = false;
      this.prontuario = false;
      this.mostrarMedicamentos=false
      this.exameUpload=false;
      this.suasConsultas=false;

    } else if (selectedOption === 'prontuario') {
      this.inicio = false;
      this.receita = false;
      this.exameUpload=false;
      this.suasConsultas=false;
      this.mostrarMedicamentos=false
    }else if (selectedOption === 'mostrarMedicamentos'){
      this.inicio = false;
      this.receita = false;
      this.prontuario=false
      this.exameUpload=false;
      this.suasConsultas=false;

    }else if(selectedOption==='exameUpload'){
      this.inicio = false;
      this.receita = false;
      this.prontuario=false;
      this.suasConsultas=false;
      this.mostrarMedicamentos=false;
    }else{
      this.inicio = false;
      this.receita = false;
      this.prontuario=false;
      this.exameUpload=false;
      this.mostrarMedicamentos=false;
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
  logOut(){
    this.sharedService.redirectHome()
  }

  // listar aqui os campos do Prontuário do paciente:
  //-> Antecendentes Médicos:
  antecedente='Hipertensão arterial diagnosticada em 2010. Asma diagnosticada na infância, atualmente sob controle. Nenhuma alergia conhecida a medicamentos ou alimentos.'
  medicamentosAtuais='Atenolol 50 mg, uma vez ao dia, para controle da pressão arterial. Losartana 100 mg, uma vez ao dia, para controle da pressão arterial.  Inalador de Salbutamol, conforme necessário, para alívio dos sintomas de asma.'
  historicoMedico='Maria Targino Gomes realiza consultas médicas de rotina a cada seis meses com seu clínico geral para acompanhamento da hipertensão arterial e avaliação geral de saúde.'
  examesRecentes='Exame de sangue realizado em 15/09/2023: para monitoramento dos níveis de glicose e lipídios no sangue. Radiografia do tórax realizada em 10/09/2023: para avaliação dos pulmões devido a sintomas respiratórios.'
  observacoes='A paciente está comprometida com a adesão ao tratamento para hipertensão arterial e asma, tomando regularmente seus medicamentos e comparecendo às consultas de acompanhamento.'
  }
