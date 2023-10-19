import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service'; // Importa o serviço compartilhado
import { PacienteService } from '../pacienteService'; // Importa o serviço de paciente
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DisponibilidadeService } from './disponibilidade-service.service';

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
// Função para pegar as horas selecionadas
enviar() {
    if (this.dateToday&&this.selectDate) {
      this.sharedService.dialogConfirm("Atualização Realizada com Sucesso", true);
      this.mostrarCardGerenciarConsultas = false; // Variável para controlar a exibição do card de gerenciar consultas
      console.log("Data selecionada:", this.selectDate);
      console.log("Horas selecionadas:", this.selectedHours);
    } else {
      this.sharedService.dialogConfirm("Selecione a data e horários", false);
    }
  }





  nomeMedico = 'Chimbinha'; // Nome do médico
  idadeMedico = '45 anos'; // Idade do médico
  areaAtuacao = 'Cardiologia'; // Área de atuação do médico

  redirectCadReceita() {
    this.sharedService.redirectCadReceita(); // Redireciona para a página de cadastro de receitas
  }

  redirectListaDePacientes() {
    this.sharedService.redirectListaDePacientes(); // Redireciona para a página de lista de pacientes
  }

  pacientes = [
    { nome: "Pedro Targino Gomes", idade: 30, sexo: "Masculino" },
    { nome: "Arthur Vieira", idade: 25, sexo: "Masculino" },
    { nome: "João Victor", idade: 28, sexo: "Masculino" },
    { nome: 'Cássio Vittori', idade: 35, sexo: "Masculino" }
  ]; // Array de pacientes, meramente exemplar, será ta,bem puxado e populado do banco de dados

  redirectPront() {
    this.sharedService.redirectProntuario1(); // Redireciona para a página de prontuário
  }

  redirectGerenciarConsultas() {
    this.sharedService.redirectGerenciarConsultas(); // Redireciona para a página de gerenciamento de consultas
  }

  // Função para definir o paciente selecionado e redirecionar para a tela do paciente
  redirectPerfilMeuPaciente(paciente: any) {
    this.pacienteService.setPacienteSelecionado(paciente); // Define o paciente selecionado usando o serviço de paciente
    this.sharedService.redirectMeuPaciente(paciente); // Redireciona para a página do paciente selecionado
  }
}
