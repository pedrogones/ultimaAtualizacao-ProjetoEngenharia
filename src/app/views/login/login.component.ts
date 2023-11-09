import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service.service';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { PacienteService } from 'src/app/pacienteService';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuarioDefault="cassiovittori";
  senhaDefault="123456";
  usuario!:string;
  senha!:string;
  constructor(private pacienteService: PacienteService,private router: Router, private dialog: MatDialog, private route: ActivatedRoute, private sharedService: SharedService, private authService: AuthService) {}
  ngOnInit(): void {}
  openDialog(message: string){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: message,
    });
 }
 delay(ms: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, ms);
  });
}



 async login(usuario: string, senha: string) {
  console.log(usuario, senha)
    if(senha==this.senhaDefault&&usuario==this.usuarioDefault){
      this.sharedService.dialogConfirm("Usuário e senha Válidos - Entrando...", true)
      await this.delay(2000)
      this.sharedService.redirectHomePaciente();
    }else{
      this.sharedService.dialogConfirm("Credenciais inválidas, tente novamente", false)
    }
}
redirectHomePaciente(){
  this.sharedService.redirectHomePaciente();
}

  redirect(): void{
    console.log('entrou')
    this.sharedService.redirectCadastro()
  }
}
