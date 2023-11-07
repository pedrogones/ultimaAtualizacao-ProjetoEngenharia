import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service'; // Importa o serviço compartilhado
import { PacienteService } from '../pacienteService'; // Importa o serviço de paciente
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DisponibilidadeService } from './disponibilidade-service.service';
import { Paciente } from '../pacientes/paciente';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-medico',
  templateUrl: './home-medico.component.html',
  styleUrls: ['./home-medico.component.scss']
})
export class HomeMedicoComponent implements OnInit {

  ngOnInit() {
    this.dataDoDia() ; // Isso irá calcular e atribuir a data do dia ao carregar a página
  }

  mostrarCardGerenciarConsultas = false; // Variável para controlar a exibição do card de gerenciar consultas
  disponibilidadeForm!: FormGroup;
  constructor(private sharedService: SharedService, private formBuilder: FormBuilder, private pacienteService: PacienteService, private fb: FormBuilder, private disponibilidadeService: DisponibilidadeService) {
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
  pacientes: Paciente[] = [
    {
      _id: 'id-1',
      nomePaciente: "Pedro Targino Gomes",
      contatoPaciente: 'usuario-1',
      dataNascPaciente: '00000000',
      cpf: '',
      endereco: '',
      sexo: "Masculino",
      telCttEmergencia: '',
      nomeCttEmergencia: '',
    },
    {
      _id: 'id-2',
      nomePaciente: "Arthur Vieira",
      contatoPaciente: 'usuario-2',
      dataNascPaciente: '00000000',
      cpf: '',
      endereco: '',
      sexo: "Masculino",
      telCttEmergencia: '',
      nomeCttEmergencia: '',
    },
    {
      _id: 'id-3',
      nomePaciente: "João Victor",
      contatoPaciente: 'usuario-3',
      dataNascPaciente: '00000000',
      cpf: '',
      endereco: '',
      sexo: "Masculino",
      telCttEmergencia: '',
      nomeCttEmergencia: '',
    },
    {
      _id: 'id-4',
      nomePaciente: "Cássio Vittori",
      contatoPaciente: 'usuario-4',
      dataNascPaciente: '00000000',
      cpf: '',
      endereco: '',
      sexo: "Masculino",
      telCttEmergencia: '',
      nomeCttEmergencia: '',
    },
    {
      _id: 'id-5',
      nomePaciente: "Geraldo Ferreira",
      contatoPaciente: 'usuario-5',
      dataNascPaciente: '00000000',
      cpf: '',
      endereco: '',
      sexo: "Masculino",
      telCttEmergencia: '',
      nomeCttEmergencia: '',
    },
    {
      _id: 'id-6',
      nomePaciente: "Ícaro Oliveira",
      contatoPaciente: 'usuario-6',
      dataNascPaciente: '00000000',
      cpf: '',
      endereco: '',
      sexo: "Masculino",
      telCttEmergencia: '',
      nomeCttEmergencia: '',
    }
  ];
  // Array de pacientes, meramente exemplar, será ta,bem puxado e populado do banco de dados

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
  redirectPerfilMeuPaciente(paciente: Paciente) {
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
