import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth-service.service';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MedicoService } from 'src/app/services/medico.service';
import { SharedService } from 'src/app/shared.service';
import { Medico } from 'src/app/medico/medico';

@Component({
  selector: 'app-cadastromedico',
  templateUrl: './cadastromedico.component.html',
  styleUrls: ['./cadastromedico.component.scss']
})
export class CadastromedicoComponent {

  nome!: string;
  usuario!: string;
  email!: string;
  sexo!:string;
  especialidade!:string;
  contato!:string;
  senha!: string;
  meuFormulario: any;
  formBuilder: any;


  //selecionar o inoput do sexo:
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  options: string[] = ['F', 'M'];
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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private authService: AuthService,
    private medicoService: MedicoService // Injete o MedicoService no construtor
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
    console.log(this.nome, this.sexo,
      this.email, this.especialidade, this.senha)
    return (
      !!this.nome &&
      !!this.email &&
      !!this.sexo &&
      !!this.senha&&
      !!this.especialidade
    );
  }


  //Função para lidar com o clique no botão de cadastro
  //usada somente para fins de teste do front, nao usar no back
  fazerCadastro(): void {
    const medicoData:Medico={
      nomeMedico: this.nome,
      especialidadeMedico: this.especialidade,
      contatoMedico: this.email,
      _id: 0
    }
    if (this.isValidForm()) {
      this.medicoService.cadastrarMedico(medicoData)
      .subscribe(
          (response) => {
            console.log('Cadastro Médico realizado com sucesso');
            this.sharedService.dialogConfirm("Cadastro Médico realizado com sucesso:" + this.nome, true)
            // Você pode redirecionar o usuário para outra página aqui, se necessário
          },
          (error) => {
            this.sharedService.dialogConfirm('Erro ao cadastrar o Medico:' + error, false)
            console.error('Erro ao cadastrar o Medico:', error);
          }
        );
        this.sharedService.redirectVerMedico()
    } else {
      this.sharedService.dialogConfirm("Preencha todos os campos", true);
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
