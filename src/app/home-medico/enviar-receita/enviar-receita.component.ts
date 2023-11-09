import { Component, OnInit } from '@angular/core';
import { PacientesDoMedico } from 'src/app/models4/pacientePorMedico';
import { Paciente } from 'src/app/pacientes/paciente';
import { MedicoService } from 'src/app/services/medico.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-enviar-receita',
  templateUrl: './enviar-receita.component.html',
  styleUrls: ['./enviar-receita.component.scss']
})
export class EnviarReceitaComponent implements OnInit{
  arquivoSelecionado: any;
  pdfSelecionado: File | null = null;
  constructor(private sharedService: SharedService, private medicoService: MedicoService){

  }
 pacinteDoSistema: Paciente[] = [];
 _idFixo:number=2;
 _idPaciente!:number;
 _nomePaciente!:string;
  ngOnInit(){
    this.medicoService.pegarSeusPacientes(this._idFixo).subscribe((pacientes)=>{
      this.meusPacientes=this.filtrarPacientesUnicos(pacientes)
      console.log('Dados dos Pacientes dps:', this.meusPacientes);
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
        // Adicione o objeto com id e nome ao array pacientesUnicos
        pacientesUnicos.push({
          idPaciente: paciente.idPaciente,
          nomePaciente: paciente.nomePaciente,
          dataNascPaciente: '',
          cpf: '',
          sexo: '',
          exames: null
        });
      }
    }
    console.log(pacientesUnicos)
    return pacientesUnicos;
  }

  meusPacientes: PacientesDoMedico[] = [];
  mostrarInputPdf=false;
  observacoes='';

  pacientesList:  string[] = [];
 selectedPaciente!: string;
  paciente!:string;
  selectedPacienteObject: any; // Declare a propriedade para armazenar o paciente selecionado

  // Função para selecionar o arquivo
// Função para selecionar o arquivo PDF
selecionarArquivo(event: any) {
  this.pdfSelecionado = event.target.files[0];
  window.alert(this.pdfSelecionado);

}

// Função para enviar o arquivo PDF
enviarPdf() {
  const pacienteId = this._idPaciente; // Substitua pelo ID do paciente selecionado

// Verifique se um arquivo foi selecionado
if (!this.pdfSelecionado) { // Corrija esta linha
  console.error('Nenhum arquivo selecionado.');
  return;
}


  // Crie um objeto FormData para enviar o arquivo
  const formData = new FormData();
  // Adicione o arquivo ao objeto FormData com a chave "pdf"
  formData.append('file', this.pdfSelecionado);
  console.log(this._idPaciente);


  // Realize a solicitação POST com o objeto FormData
  this.medicoService.enviarReceita(pacienteId, this._idFixo, formData).subscribe(
    (resultado) => {
      console.log('PDF enviado com sucesso:', resultado);
      this.sharedService.redirectHomeMedico()
      // Faça algo após o upload, como recarregar os dados ou exibir uma mensagem de sucesso.
    },
    (error) => {
      console.error('Erro ao enviar o PDF:', error);
    }
  );
}
// Adicione esta função ao seu componente
logSelectedPaciente() {
  if (this.selectedPacienteObject) {
   this._idPaciente= this.selectedPacienteObject.id-1;
    this._nomePaciente= this.selectedPacienteObject.nome
  } else {
    console.log('Nenhum paciente selecionado.');
  }
}



  back(){
    this.sharedService.redirectHomeMedico()
  }
  handlePdfUpload() {
    throw new Error('Method not implemented.');
  }
  exitIpnut(){
    this.mostrarInputPdf=false
  }
}
