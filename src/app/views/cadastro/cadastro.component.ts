import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth-service.service';
import { PacienteServicesService } from 'src/app/services/paciente-services.service';
import { ConfirmationDialogComponent } from 'src/app/sharedDialog/confirmation-dialog/confirmation-dialog.component';
import { SharedService } from 'src/app/shared.service';
import { Paciente } from 'src/app/pacientes/paciente';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  nome: string = '';
  id: number = 0;
  dataNascimento: string = '';
  email: string = '';
  sexo: string = '';
  usuario: string = '';
  senha: string = '';
  cpf: string = '';

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
    private authService: AuthService,
    private pacienteService: PacienteServicesService
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
      console.log("Data formatada: " + this.dataNascimento);
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
    return !!this.nome && !!this.email && !!this.dataNascimento && !!this.sexo && !!this.senha;
  }

  async fazerCadastro(): Promise<void> {
    const pacienteData: Paciente = {
      _id: this.id,
      name: this.nome,
      dataNascimento: this.dataNascimento,
      usuario: this.usuario,
      idade: '',
      alergico: '',
      doencas: '',
      historicoFamiliar: '',
      email: this.email,
      rg: this.cpf,
      sexo: this.sexo,
      url_img: '',
    };
    if (this.isValidForm()) {
      this.pacienteService.cadastrarPaciente(pacienteData);
      await this.sharedService.callDelay(2000);
      this.redirectLogin();
    } else {
      this.openDialog("Preencha todos os campos e selecione a opção 'Paciente' ou 'Médico'");
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
