import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../pacientes/paciente';
import { HistoricoMedico } from '../models/historicoMedico';
import { ReceitasMedicas } from '../models/receitasMedicas';
import { SuasConsultas } from '../models2/suasConsultas';
import { Medico } from '../medico/medico';

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
  data: string; // Suponho que você deseja manter a data como uma string
  hora: string; // Suponho que você deseja manter a hora como uma string
  // Adicione os campos que deseja incluir aqui, se necessário
}
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
  medicoTypes: string[] = [];
  selectedMedico!: string;
  constructor(private sharedService: SharedService, private pacienteService: PacienteService) {
  }
  displayedColumnsSuasConsultas: string[] = ['motivo', 'medico', 'data', 'hora'];
  dataSourceSuasConsultas = new MatTableDataSource<Consultas>(); // Usar a interface Consultas como tipo
  paciente: Paciente = {
    _id: 0, // Inicialize com um valor padrão ou deixe em branco
    nomePaciente: '',
    contatoPaciente: '',
    dataNascPaciente: '',
    cpf: '',
    sexo: '',
    endereco: '',
    telCttEmergencia: '',
    nomeCttEmergencia: '',
  };
  historico: HistoricoMedico={
    idHistorico: 0,
    idPaciente: '',
    nomePaciente:'',
    doencasAnteriores: '',
    doencasCronicas: '',
    alergias: '',
    cirurgiasAnteriores: '',
    medicacoesAtuais: '',
    medicacoesAnteriores: ''
  }
  receitasMedicas: ReceitasMedicas={
    nome: '',
    url: '',
    type: null,
    size: 0,
    paciente: undefined,
    nomePaciente: null,
    idPaciente: null,
    pacienteDTO: null,
    medico: undefined,
    medicoDTO: {
      idMedico: 0,
      nomeMedico: '',
      especialidadeMedico: '',
      contatoMedico: ''
    }
  }
  suasConsulta: SuasConsultas={
    idConsulta: 0,
    nomeMedico: '',
    nomePaciente: '',
    motivoConsulta: '',
    dataConsulta: undefined,
    statusConsulta: ''
  }
  medicosDisponiveis: Medico[] = [];
  ngOnInit(): void {
    const pacienteId = 6; // Substitua pelo ID do paciente que você deseja buscar
    this.pacienteService.pegarPorId(pacienteId).subscribe(
      (paciente) => {
        // Preencha os campos do paciente com os dados obtidos
        this.paciente = paciente;

        console.log('Dados do Paciente:', paciente);
      },
      (error) => {
        console.error('Erro ao buscar paciente por ID:', error);
      }
    );
    this.pacienteService.pegarHistorico(pacienteId).subscribe(
      (historicoData) => {
        if (historicoData.length > 0) {
          this.historico = historicoData[0];
          console.log('Dados do Histórico:', this.historico);
        } else {
          console.log('Histórico vazio para o paciente com ID:', pacienteId);
        }
      },
      (error) => {
        console.error('Erro ao buscar Histórico por ID:', error);
      }
    );

    /*ta confuso
    this.pacienteService.pegarReceitas(pacienteId).subscribe(
      (receitasPdfs) => {
        if (receitasPdfs.length > 0) {
          this.receitasMedicas = receitasPdfs[0];
          console.log('Receitas pdfs:', this.receitasMedicas);
        } else {
          console.log('pdf vazio para o paciente com ID:', pacienteId);
        }
      },
      (error) => {
        console.error('Erro ao buscar Pdfs por ID:', error);
      }
    );
    */

   this.pacienteService.suasConsultas(pacienteId).subscribe((data) => {
    // Mapeie os dados para o tipo Consultas
    const consultas: Consultas[] = data.map((item) => {
      return {
        motivo: item.motivoConsulta,
        medico: item.nomeMedico,
        data: item.dataConsulta.toString(), // Converta a data para string, se necessário
        hora: item.statusConsulta, // Suponho que "statusConsulta" deveria ser "hora"
      };
    });
    this.dataSourceSuasConsultas.data = consultas;
  });
  this.pacienteService.pegarMedicos().subscribe((medicosG) => {
  // Mapeie os nomes dos médicos para o array medicoTypes
  this.medicoTypes = medicosG.map((medico) => medico.nomeMedico);

  // Seleciona o primeiro médico por padrão se houver algum médico na lista
  if (this.medicoTypes.length > 0) {
    this.selectedMedico = this.medicoTypes[0];
  }
  console.log('Médicos Disponíveis:', this.medicosDisponiveis);
});
  }
// Declaração da variável para armazenar o arquivo selecionado
arquivoSelecionado: File | null = null;

// Função para selecionar o arquivo
selecionarArquivo(event: any) {
  this.arquivoSelecionado = event.target.files[0];
}

// Função para enviar o arquivo PDF
enviarPdf() {
  const pacienteId = 6; // Substitua pelo ID do paciente logado

  // Verifique se um arquivo foi selecionado
  if (!this.arquivoSelecionado) {
    console.error('Nenhum arquivo selecionado.');
    return;
  }
  // Crie um objeto FormData para enviar o arquivo
  const formData = new FormData();
  // Adicione o arquivo ao objeto FormData com a chave "file"
  formData.append('file', this.arquivoSelecionado);
  // Realize a solicitação POST com o objeto FormData
  this.pacienteService.uploadExamRecentes(pacienteId, formData).subscribe(
    (resultado) => {
      console.log('PDF enviado com sucesso:', resultado);
      // Faça algo após o upload, como recarregar os dados ou exibir uma mensagem de sucesso.
    },
    (error) => {
      console.error('Erro ao enviar o PDF:', error);
    }
  );
}
  displayedColumnsPdfs: string[] = [ 'name', 'medico', 'data'];
  dataSourcePdfs = new MatTableDataSource(PDFS_PRESCRITOS);

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
  logOut(){
    this.sharedService.redirectHome()
  }
}
