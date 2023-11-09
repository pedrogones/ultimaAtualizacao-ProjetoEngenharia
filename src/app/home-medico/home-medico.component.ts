import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service'; // Importa o serviço compartilhado
import { PacienteService } from '../pacienteService'; // Importa o serviço de paciente
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DisponibilidadeService } from './disponibilidade-service.service';
import { Paciente } from '../pacientes/paciente';
import { DatePipe } from '@angular/common';
import { MedicoService } from '../services/medico.service';
import { ModeloConsulta } from '../models3/modeloConsulta';
import { Medico } from '../medico/medico';
import { PacientesDoMedico } from '../models4/pacientePorMedico';

@Component({
  selector: 'app-home-medico',
  templateUrl: './home-medico.component.html',
  styleUrls: ['./home-medico.component.scss']
})
export class HomeMedicoComponent implements OnInit {
  medico:Medico={
    _id: undefined,
    nomeMedico: '',
    especialidadeMedico: '',
    contatoMedico: ''
  }
  meusPacientes: PacientesDoMedico[] = [];
  pacientes: PacientesDoMedico[] = []
  // Array de pacientes, meramente exemplar, será ta,bem puxado e populado do banco de dados

  ngOnInit() {
    this.dataDoDia(); // Isso irá calcular e atribuir a data do dia ao carregar a página
    this.carregarConsultas()
    this.medicoService.listarMedicosById(this._idFixo).subscribe(
      (medico) => {
        // Preencha os campos do médico com os dados obtidos
        this.medico = medico;
        console.log('Dados do Médico:', medico);
      },
      (error) => {
        console.error('Erro ao buscar médico por ID:', error);
      }
    );
    this.medicoService.pegarSeusPacientes(this._idFixo).subscribe((pacientes)=>{
      this.meusPacientes=this.filtrarPacientesUnicos(pacientes)
      this.pacientes=this.filtrarPacientesUnicos(pacientes)
      console.log('Dados dos Pacientes dps:', this.meusPacientes);
      console.log("Pacientes no novo array:", this.pacientes)
    },
    (error) => {
      console.error('Erro ao buscar pacientes por ID:', error);
    }
    );
  }
  filtrarPacientesUnicos(pacientes: any): PacientesDoMedico[] {
    const pacientesUnicos: PacientesDoMedico[] = [];
    const nomesExistentes: Set<string> = new Set();

    for (const paciente of pacientes) {
      if (!nomesExistentes.has(paciente.nomePaciente)) {
        nomesExistentes.add(paciente.nomePaciente);
        pacientesUnicos.push(paciente);
      }
    }

    return pacientesUnicos;
  }


horaFormatada=''
  _idFixo=1
  idPaciente!:number
  carregarConsultas() {
    const consultas: ModeloConsulta = {
      idConsulta: 0,
      nomeMedico: '',
      nomePaciente: '',
      motivoConsulta: '',
      dataConsulta: '',
      statusConsulta: ''
    };

    this.medicoService.verConsultasById(this._idFixo).subscribe(
      (consultaMedico) => {
        this.consultas = consultaMedico;
        consultas.dataConsulta="12:00"
        console.log('Suas consultas:', this.consultas); // Use this.consultas aqui
      },
      (error) => {
        console.error('Erro ao buscar consultas pelo ID:' + this._idFixo, error);
      }

    );

  }



  mostrarCardGerenciarConsultas = false; // Variável para controlar a exibição do card de gerenciar consultas
  disponibilidadeForm!: FormGroup;
  constructor(private medicoService: MedicoService,private sharedService: SharedService, private formBuilder: FormBuilder, private pacienteService: PacienteService, private fb: FormBuilder, private disponibilidadeService: DisponibilidadeService) {
    this.disponibilidadeForm = this.fb.group({
      dataSelecionada: [null],
      disponibilidade: this.fb.array([])
    });
  }

  hora1!:any;

  dateToday  = new Date(); // Variável para armazenar a data do dia
  consultas: any[] = []; // Array para representar as consultas do dia

  dataDoDia() {// Calcula a data do dia atual
    this.carregarConsultasDoDia(); // Carrega as consultas para o dia atual
  }


  carregarConsultasDoDia() {
    // Lógica para criar um array de consultas para o dia atual (exemplo didático)
    // Será puxado do banco de dados ou definido de forma fixa
    //nesse exemplo ta alternando horários com e sem consultas
    this.consultas = [];
    const diaAtual = this.dateToday.getDate();
    for (let hora = 8; hora <= 17; hora++) {
      const consulta = {
        data: new Date(this.dateToday.getFullYear(), this.dateToday.getMonth(), diaAtual, hora),
        paciente: hora % 2 === 0 ? 'Com paciente ': 'Sem consulta',
      };
      this.consultas.push(consulta);
    }
  }
  selectedHours: string[] = [];
  //logica para pegar o dia e hora que o médico estará disponível
  selectDate!: string | null; // Defina selectDate como um objeto Date ou nulo (null)
  onDateSelected(event: MatDatepickerInputEvent<Date>) {
    const dataSelecionada = event.value;
    if (dataSelecionada) {
      this.disponibilidadeForm.get('dataSelecionada')!.setValue(dataSelecionada);
      const month = dataSelecionada.getMonth() + 1;
      this.selectDate = dataSelecionada.getDate() + '/' + month + '/' + dataSelecionada.getFullYear();
    }
  }
  onCheckboxChange(hour: string) {
    if (this.selectedHours.includes(hour)) {
      // Se a hora já estiver na lista, remova-a
      this.selectedHours = this.selectedHours.filter(h => h !== hour);
    } else {
      // Se a hora não estiver na lista, adicione-a
      this.selectedHours.push(hour);
    }
  }
  enviar() {
    if (this.selectDate&&this.selectedHours) {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Define a hora para meia-noite

      const selectedDateParts = this.selectDate.split('/');
      const selectedDate = new Date(
        +selectedDateParts[2],
        +selectedDateParts[1] - 1,
        +selectedDateParts[0]
      );

      if (selectedDate < today) {
        this.sharedService.dialogConfirm("A data selecionada é menor que o dia de hoje.", true);
      } else if (selectedDate.getTime() === today.getTime()) {
        this.sharedService.dialogConfirm("Você não pode marcar uma consulta para hoje.", true);
      } else {
        this.sharedService.dialogConfirm("Consultas do dia "+this.selectDate+" atualizadas com sucesso", true);
       this.mostrarCardGerenciarConsultas = false;
      }
    } else {
      this.sharedService.dialogConfirm("Selecione a data", false);
    }
  }
  nomeMedico = 'João Silva'; // Nome do médico
  idadeMedico = '45 anos'; // Idade do médico
  areaAtuacao = 'Cardiologia'; // Área de atuação do médico
  infoPessoais='Formado na universidade...'//informações pessoais do médico

  redirectCadReceita() {
    this.sharedService.redirectCadReceita(); // Redireciona para a página de cadastro de receitas
  }

  redirectListaDePacientes() {
    this.sharedService.redirectListaDePacientes(); // Redireciona para a página de lista de pacientes
  }

  redirectPront() {
    this.sharedService.redirectProntuarioCadastrado(); // Redireciona para a página de prontuário
  }

  redirectGerenciarConsultas() {
    this.sharedService.redirectGerenciarConsultas(); // Redireciona para a página de gerenciamento de consultas
  }

  redirectVerMedicacoes(){
    this.sharedService.redirectVerMedicacoes()
  }
  // Função para definir o paciente selecionado e redirecionar para a tela do paciente
  redirectPerfilMeuPaciente(paciente: any) {
    this.pacienteService.setPacienteSelecionado(paciente);
    const nomePaciente = this.pacienteService.getPacienteNome(); // Chame o método get para obter o nome
    console.log("TESTE: "+nomePaciente);
    this.sharedService.redirectMeuPaciente(paciente); // Redireciona para a página do paciente selecionado
  }

  logOut(){
    this.sharedService.redirectHome()
  }

  redirectEnviarReceita(){
    this.sharedService.redirectEnviarReceita();
  }
}
