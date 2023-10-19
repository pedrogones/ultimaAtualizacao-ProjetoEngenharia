import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SharedService } from 'src/app/shared.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth-service.service';
import { PacienteService } from 'src/app/pacienteService';
import { ConfirmationDialogComponent } from 'src/app/sharedDialog/confirmation-dialog/confirmation-dialog.component';
//import { MeuDialogComponent } from '../meu-dialog/meu-dialog.component'; // Certifique-se de usar o caminho correto

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],

})
export class CadastroComponent implements OnInit {

  nome!: string;
  idade!: number;
  email!: string;
  sexo!:string;
  usuario!: string;
  senha!: string;
  meuFormulario: any;
  formBuilder: any;
  dataNascimento!: Date;

  onDateChange(event: any) {
    this.dataNascimento = event.value;
  }
  //selecionar o inoput do sexo:
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  options: string[] = ['Feminino', 'Masculino',  'Não Informar'];
  filteredOptions: string[];


  filter(inputElement: HTMLInputElement): void {
    const filterValue = inputElement.value.toLowerCase();
    this.sexo = inputElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

  //verifica se email ta no formato correto
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  constructor(private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {
    this.filteredOptions = this.options.slice();
  }
  @ViewChild('menuButton')
  menuButton!: MatMenuTrigger;
  ngOnInit(): void { }
  openDialog(message: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: message,
    });

  }
  //valida formato do email
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  redirectProntuario() {
    this.sharedService.redirectProntuario();
  }
  // Função para validar se o formulário está completo
  isValidForm(): boolean {
    // Verifique se todos os campos obrigatórios estão preenchidos
    console.log(this.senha, this.nome,
      this.idade,
      this.email, this.dataNascimento, this.sexo)
    return (
      !!this.nome &&
      !!this.idade &&
      !!this.email &&
      !!this.dataNascimento &&
      !!this.sexo &&
      !!this.senha
    );
  }


  //Função para lidar com o clique no botão de cadastro
  //usada somente para fins de teste do front, nao usar no back
  fazerCadastro(): void {
    if (this.isValidForm()) {
      this.authService.addUser( this.senha, this.nome,
        this.idade, this.email).subscribe(
          (response) => {
            console.log('Cadastro do paciente realizado com sucesso:', response);
            this.sharedService.dialogConfirm("Cadastro do paciente realizado com sucesso: " + response, true)
            // Você pode redirecionar o usuário para outra página aqui, se necessário
          },
          (error) => {
            this.sharedService.dialogConfirm('Erro ao cadastrar o paciente:' + error, false)
            console.error('Erro ao cadastrar o paciente:', error);
          }
        );
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
    this.menuButton.openMenu(); // Abre o menu ao clicar no ícone do menu
  }
  redirect(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }




}
