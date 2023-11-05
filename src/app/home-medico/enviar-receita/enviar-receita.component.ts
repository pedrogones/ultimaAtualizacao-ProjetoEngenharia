import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-enviar-receita',
  templateUrl: './enviar-receita.component.html',
  styleUrls: ['./enviar-receita.component.scss']
})
export class EnviarReceitaComponent {
  constructor(private sharedService: SharedService){

  }
  mostrarInputPdf=false;
  observacoes='';




  async handlePdfUpload() {
    const fileInput = document.getElementById("pdfInput") as HTMLInputElement;
    const file = fileInput.files; // Pega o primeiro arquivo selecionado (neste caso, um arquivo PDF)
    if(file?.length==0){
      this.sharedService.dialogConfirm("Selecione um arquivo", false)
    } else if (file && this.observacoes == '') {
      this.sharedService.dialogConfirm("Preescrição enviada com sucesso", true)
      console.log('sem observacoes');
      console.log(file);
      this.sharedService.callDelay(2000)
    } else if (file && this.observacoes != '') {
      this.sharedService.dialogConfirm("Preescrição enviada com sucesso", true)
      console.log(file)
      console.log('com observacoes');
      this.sharedService.callDelay(2000)
      // Aqui você pode adicionar a lógica para fazer o upload do PDF e processar as observações.
      // Por exemplo, você pode chamar uma função de serviço para enviar os dados para o servidor.
      // Ou qualquer outra ação que desejar realizar.
    }
    this.mostrarInputPdf=false
  }

  back(){
    this.sharedService.redirectHomeMedico()
  }
  enviarPdf(){
    this.handlePdfUpload()
    this.back()
  }
  exitIpnut(){
    this.mostrarInputPdf=false
  }
}
