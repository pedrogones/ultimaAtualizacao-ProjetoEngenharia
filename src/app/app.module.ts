
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
// Import other necessary modules for Angular Material components

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Importe outros módulos relacionados ao Angular Material, se necessário
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { HomeMedicoComponent } from './home-medico/home-medico.component';
import { HomePacienteComponent } from './home-paciente/home-paciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { VerificaMedicoComponent } from './verifica-medico/verifica-medico.component';
import { ViewPerfilmedicoComponent } from './view-perfilmedico/view-perfilmedico.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProntuarioMedicoComponent } from './prontuario-medico/prontuario-medico.component';
import { ComponentTesteComponent } from './components/component-teste/component-teste.component';
import { PerfilPacienteComponent } from './home-medico/perfil-paciente/perfil-paciente.component';
import { ErrorDialogComponent } from './sharedDialog/error-dialog/error-dialog.component';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { GerenciarConsultasComponent } from './home-medico/gerenciar-consultas/gerenciar-consultas.component';
import { ReceitaCadastradaComponent } from './home-medico/receita-cadastrada/receita-cadastrada.component';
import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';
import { EnviarReceitaComponent } from './home-medico/enviar-receita/enviar-receita.component';
import { VerMedicacoesComponent } from './home-medico/ver-medicacoes/ver-medicacoes.component';
import { ViewRemedioComponent } from './home-medico/ver-medicacoes/view-remedio/view-remedio.component';
import { CadastrarInfoComponent } from './home-medico/perfil-paciente/cadastrar-info/cadastrar-info.component';
import { CadastromedicoComponent } from './views/cadastromedico/cadastromedico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    PacientesComponent,
    VerificaMedicoComponent,
    HomeMedicoComponent,
    HomePacienteComponent,
    ViewPerfilmedicoComponent,
    ProntuarioMedicoComponent,
    ComponentTesteComponent,
    PerfilPacienteComponent,
    GerenciarConsultasComponent,
    ReceitaCadastradaComponent,
    MedicamentosListaComponent,
    EnviarReceitaComponent,
    VerMedicacoesComponent,
    ViewRemedioComponent,
    CadastrarInfoComponent,
    CadastromedicoComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatNativeDateModule ,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,

    MatCheckboxModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    MatDatepickerModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
