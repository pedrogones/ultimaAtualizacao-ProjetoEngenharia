import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './sharedDialog/confirmation-dialog/confirmation-dialog.component';
//import { MeuDialogComponent } from './views/meu-dialog/meu-dialog.component'; // Importe a classe do diálogo

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  redirectNext(arg0: string) {
    this.router.navigate(['homeMedico/medicacoes'+arg0], { relativeTo: this.route });
  }
  redirectCuidados(page: string){
    this.router.navigate(['homeMedico/medicacoes'+page+'/cuidados'], { relativeTo: this.route });
  }
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
  redirectCadastroMedico(): void {
    this.router.navigate(['cadastroMedico'], { relativeTo: this.route })
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
  redirectPerfilMedico(_id: number) {
    this.router.navigate(['homePaciente/perfilMedico'], { relativeTo: this.route })
  }
  redirectProntuario1() {
    this.router.navigate(['homeMedico/prontuario'], { relativeTo: this.route })
  }
  redirectMeuPaciente(paciente: any) {
    this.router.navigate(['homeMedico/perfilMeuPaciente'], { relativeTo: this.route })
  }
  redirectCadInfoPaciente(paciente: any){
    this.router.navigate(['homeMedico/perfilMeuPaciente/mudarInformacoes'], {relativeTo: this.route})
  }

  redirectCadReceita(){
    this.router.navigate(['homeMedico/cadReceita'], {relativeTo: this.route})
  }

  redirectListaDePacientes(){
    this.router.navigate(['homeMedico/listaDePacientes'], {relativeTo: this.route})
  }
  redirectGerenciarConsultas(){
    this.router.navigate(['homeMedico/gerenciarConsultas'], {relativeTo: this.route})
  }

  redirectProntuarioCadastrado(){
    this.router.navigate(['homePaciente/prontuarioCadastrado'], {relativeTo: this.route})
  }

  redirectReceitaCadastrada(){
    this.router.navigate(['homePaciente/receitaCadastrada'], {relativeTo: this.route})
  }
  redirectMedicacoes(){
    this.router.navigate(['homeMedico/medicacoes1'], {relativeTo: this.route})
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
  redirectEnviarReceita(){
    this.router.navigate(['homeMedico/enviarReceita'], {relativeTo: this.route})
  }
  redirectVerMedicacoes(){
    this.router.navigate(['homeMedico/verMedicacoes'], {relativeTo: this.route})
  }
  redirectRemedioSelected(medicamento: any){
    this.router.navigate(['homeMedico/verMedicacoes/:id'], {relativeTo: this.route})
  }
}
