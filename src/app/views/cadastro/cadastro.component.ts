import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/sharedDialog/confirmation-dialog/confirmation-dialog.component';
import { SharedService } from 'src/app/shared.service';
import { Paciente } from 'src/app/pacientes/paciente';
import { MatMenuTrigger } from '@angular/material/menu';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  nome!: string;
  id!: number;
  dataNascimento!: string;
  email!: string;
  sexo!: string;
  usuario!: string;
  senha!: string;
  cpf!: string;
  enreco!: string;
  _idFixo1: number = 3;
  telCttEmergencia!: string;
  nomeCttEmergencia!: string;

  paciente: Paciente[] = [];

  myControl = new FormControl('');
  options: string[] = ['F', 'M'];
  filteredOptions: string[];

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @ViewChild('menuButton') menuButton!: MatMenuTrigger;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private pacienteService: PacienteService
  ) {
    this.filteredOptions = this.options.slice();
  }

  onDateChange(event: any) {
    const dataSelecionada: Date = event.value;
    if (dataSelecionada) {
      const dia = ('0' + dataSelecionada.getDate()).slice(-2);
      const mes = ('0' + (dataSelecionada.getMonth() + 1)).slice(-2);
      const ano = dataSelecionada.getFullYear();
      this.dataNascimento = `${ano}-${mes}-${dia}`;
      console.log('Data formatada: ' + this.dataNascimento);
    } else {
      this.dataNascimento = '';
    }
  }

  filter(inputElement: HTMLInputElement): void {
    const filterValue = inputElement.value.toLowerCase();
    this.sexo = inputElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  openDialog(message: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: message,
    });
  }

  isValidForm(): boolean {
    return !!this.nome && !!this.email && !!this.dataNascimento && !!this.sexo;
  }

  async fazerCadastro(): Promise<void> {
    const pacienteData: Paciente = {
      idPaciente: this.id,
      nomePaciente: this.nome,
      endereco: this.enreco,  // Corrigido para "enreco"
      contatoPaciente: this.email,
      dataNascPaciente: this.dataNascimento,
      cpf: this.cpf,
      sexo: this.sexo,
      telCttEmergencia: this.telCttEmergencia,
      nomeCttEmergencia: this.nomeCttEmergencia
    };

    if (this.isValidForm()) {
      this.pacienteService.cadastrarPaciente(pacienteData).subscribe(
        async (response) => {
          console.log('Cadastro do Paciente realizado com sucesso:', response);
          this.sharedService.dialogConfirm('Cadastro do Paciente realizado com sucesso:' + response, true);
          // Você pode redirecionar o usuário para outra página aqui, se necessário
          await this.sharedService.callDelay(2000)
          this.sharedService.redirectHomePaciente();
        },
        (error) => {
          this.sharedService.dialogConfirm('Erro ao cadastrar o Paciente:' + error, false);
          console.error('Erro ao cadastrar o Paciente:', error);
        }
      );
      //  this.redirectLogin();
    } else {
      this.openDialog('Preencha todos os campos');
    }
  }

  redirectHome(): void {
    this.sharedService.redirectHome();
  }

  redirectLogin(): void {
    this.sharedService.redirectLogin();
  }

  toggleMenu(): void {
    this.menuButton.openMenu();
  }

  redirect(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
