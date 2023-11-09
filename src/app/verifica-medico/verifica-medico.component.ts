import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../sharedDialog/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-verifica-medico',
  templateUrl: './verifica-medico.component.html',
  styleUrls: ['./verifica-medico.component.scss']
})
export class VerificaMedicoComponent implements OnInit{

 // vamos manter um codigo de acesso padrao
 codigoPadrao = 'clinicaSaude'
  codigo = '';
 ngOnInit(){

 }
 constructor(private sharedService: SharedService, private dialog: MatDialog){

 }

 delay(ms: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, ms);
  });
}
async callDelay(numb: number) {
  await this.delay(numb)
}

async submit(){
  if (this.codigo == this.codigoPadrao) {
    this.callDelay(2000)
   this.sharedService.dialogConfirm("Codigo correto", true)
   await this.callDelay(2000)
    this.sharedService.redirectHomeMedico();
  }else{
    this.sharedService.dialogConfirm("Código Incorreto\nTente Novamente...", false)

  }
}
}
