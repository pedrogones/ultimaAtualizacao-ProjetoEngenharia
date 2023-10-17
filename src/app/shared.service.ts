import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './sharedDialog/confirmation-dialog/confirmation-dialog.component';
//import { MeuDialogComponent } from './views/meu-dialog/meu-dialog.component'; // Importe a classe do diálogo

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private pacientes = [
    { nome: "Pedro Targino Gomes", idade: 30, sexo: "Masculino" },
    { nome: "Arthur Vieira", idade: 25, sexo: "Masculino" },
    { nome: "João Victor", idade: 28, sexo: "Masculino" },
    { nome: 'Cássio Vittori', idade: 35, sexo: "Masculino" }
  ];

  getPacientes() {
    return this.pacientes;
  }
  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }
  redirectHome(): void {
    this.router.navigate([''], { relativeTo: this.route });
  }
  redirectLogin(): void {
    this.router.navigate(['login'], { relativeTo: this.route });
  }
  redirectProntuario(): void {
    this.router.navigate(['paciente'], { relativeTo: this.route })
  }
  redirectCadastro(): void {
    this.router.navigate(['cadastro'], { relativeTo: this.route })
  }
  redirectVerMedico() {
    this.router.navigate(['entrarComoMedico'], { relativeTo: this.route })
  }
  redirectHomeMedico() {
    this.router.navigate(['homeMedico'], { relativeTo: this.route })
  }
  redirectHomePaciente() {
    this.router.navigate(['homePaciente'], { relativeTo: this.route })
  }
  redirectPerfilMedico() {
    this.router.navigate(['homePaciente/perfilMedico'], { relativeTo: this.route })
  }
  redirectProntuario1() {
    this.router.navigate(['homeMedico/prontuario'], { relativeTo: this.route })
  }
  redirectMeuPaciente(paciente: any) {
    this.router.navigate(['homeMedico/perfilMeuPaciente'], { relativeTo: this.route })
  }

  redirectCadReceita(){
    this.router.navigate(['homeMedico/cadReceita'], {relativeTo: this.route})
  }

  redirectListaDePacientes(){
    this.router.navigate(['homeMedico/listaDePacientes'], {relativeTo: this.route})
  }

  delay(ms: number) {
    return new Promise<void>(resolve => {
      setTimeout(resolve, ms);
    });
  }
  async callDelay(numb: number) {
    await this.delay(numb)
  }
  dialogConfirm(message: any, bool: boolean) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: message
    });


    dialogRef.afterClosed().subscribe(async result => {
      if (bool) {
        // Lógica para "Sim" (Yes)
      } else {

      }
    });

  }


}
