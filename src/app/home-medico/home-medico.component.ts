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
  mostrarInputPdf=false;
  observacoes='';

  handlePdfUpload() {
    const fileInput = document.getElementById("pdfInput") as HTMLInputElement;
    const file = fileInput.files; // Pega o primeiro arquivo selecionado (neste caso, um arquivo PDF)
    if(file?.length==0){
      this.sharedService.dialogConfirm("Selecione um arquivo", false)
    } else if (file && this.observacoes == '') {
      console.log('sem observacoes');
      console.log(file);
      
    } else if (file && this.observacoes != '') {
      console.log(file)
      console.log('com observacoes');
      // Aqui você pode adicionar a lógica para fazer o upload do PDF e processar as observações.
      // Por exemplo, você pode chamar uma função de serviço para enviar os dados para o servidor.
      // Ou qualquer outra ação que desejar realizar.
    }
  }
  
  enviarPdf(){
    this.handlePdfUpload()
  }
  exitIpnut(){
    this.mostrarInputPdf=false
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

  redirectCadReceita() {
    this.sharedService.redirectCadReceita(); // Redireciona para a página de cadastro de receitas
  }

  redirectListaDePacientes() {
    this.sharedService.redirectListaDePacientes(); // Redireciona para a página de lista de pacientes
  }

 // Use objetos Paciente compatíveis com a interface:
pacientes: Paciente[] = [
  {
    _id: 'id-1',
    name: "Pedro Targino Gomes",
    usuario: 'usuario-1',
    idade: '30',
    alergico: 'Alérgico a dipirona monohidratada',
    doencas:'não há',
    historicoFamiliar: 'Diabtes Tipo 1',
    email: 'email-1',
    rg: '12345-67',
    sexo: "Masculino",
    url_img:"pedroPaciente.png"
  },
  {
    _id: 'id-1',
    name: "Arthur Vieira",
    usuario: 'usuario-2',
    idade: '38',
    alergico: 'Alérgico a parecetamol',
    doencas:'Hipertensão',
    historicoFamiliar: 'Diabtes Tipo 1',
    email: 'email-1',
    rg: '12345-67',
    sexo: "Masculino",
    url_img:"arthurPaciente.png"
  },
  {
    _id: 'id-2',
    name: "João Victor",
    usuario: 'usuario-3',
    idade: '28',
    alergico: 'Não',
    doencas: 'Asma',
    historicoFamiliar: 'Nenhum histórico de doença',
    email: 'email-3',
    rg: '98765-43',
    sexo: "Masculino",
    url_img: "joaoPaciente.png"
  },
  {
    _id: 'id-3',
    name: "Cássio Vittori",
    usuario: 'usuario-4',
    idade: '35',
    alergico: 'Alérgico a penicilina',
    doencas: 'Diabetes Tipo 2',
    historicoFamiliar: 'Diabetes Tipo 1 e Hipertensão',
    email: 'email-4',
    rg: '56789-01',
    sexo: "Masculino",
    url_img: "cassioPaciente.png"
  },
  {
    _id: 'id-4',
    name: "Geraldo Ferreira",
    usuario: 'usuario-5',
    idade: '45',
    alergico: 'Não',
    doencas: 'Hipertensão e Colesterol Alto',
    historicoFamiliar: 'Nenhum histórico de doenças familiares',
    email: 'email-5',
    rg: '54321-98',
    sexo: "Masculino",
    url_img: "geraldoPaciente.png"
  },
  {
    _id: 'id-5',
    name: "Ícaro Oliveira",
    usuario: 'usuario-6',
    idade: '32',
    alergico: 'Alérgico a amoxicilina',
    doencas: 'Asma',
    historicoFamiliar: 'Asma e Diabetes Tipo 2',
    email: 'email-6',
    rg: '12398-76',
    sexo: "Masculino",
    url_img: "icaroPaciente.png"
  }


  ]; // Array de pacientes, meramente exemplar, será ta,bem puxado e populado do banco de dados

  redirectPront() {
    this.sharedService.redirectProntuarioCadastrado(); // Redireciona para a página de prontuário
  }

  redirectGerenciarConsultas() {
    this.sharedService.redirectGerenciarConsultas(); // Redireciona para a página de gerenciamento de consultas
  }

  redirectMedicacoes(){
    this.sharedService.redirectMedicacoes()
  }

  // Função para definir o paciente selecionado e redirecionar para a tela do paciente
  redirectPerfilMeuPaciente(paciente: Paciente) {
    this.pacienteService.setPacienteSelecionado(paciente);
    const nomePaciente = this.pacienteService.getPacienteNome(); // Chame o método get para obter o nome
    console.log("TESTE: "+nomePaciente);
    this.sharedService.redirectMeuPaciente(paciente); // Redireciona para a página do paciente selecionado
  }
}
