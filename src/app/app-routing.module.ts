
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { VerificaMedicoComponent } from './verifica-medico/verifica-medico.component';
import { HomeMedicoComponent } from './home-medico/home-medico.component';
import { HomePacienteComponent } from './home-paciente/home-paciente.component';
import { MedicacoesComponent } from './views/medicacoes/medicacoes.component';
import { ViewPerfilmedicoComponent } from './view-perfilmedico/view-perfilmedico.component';
import { PerfilPacienteComponent } from './home-medico/perfil-paciente/perfil-paciente.component';
import { ListaDePacientesComponent } from './lista-de-pacientes/lista-de-pacientes.component';
import { GerenciarConsultasComponent } from './home-medico/gerenciar-consultas/gerenciar-consultas.component';
import { ReceitaCadastradaComponent } from './home-medico/receita-cadastrada/receita-cadastrada.component';
import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';
import { Medicacoes2Component } from './views/medicacoes2/medicacoes2.component';
import { CuidadosComponent } from './views/medicacoes2/cuidados/cuidados.component';
import { Cuidados1Component } from './views/medicacoes/cuidados1/cuidados1.component';
import { Medicacoes3Component } from './views/medicacoes3/medicacoes3.component';
import { Cuidados3Component } from './views/medicacoes3/cuidados3/cuidados3.component';


const routes: Routes = [
  //declaração da rotas, na rota raiz a gente abre o LoginCompponent
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'paciente', component: PacientesComponent},
  {path: 'entrarComoMedico', component: VerificaMedicoComponent},
  {path: 'homeMedico', component: HomeMedicoComponent},
  {path: 'homePaciente', component: HomePacienteComponent},
  {path: 'medicacoes', component: MedicacoesComponent},
  {path: 'homePaciente/perfilMedico', component: ViewPerfilmedicoComponent},
  //{path: 'homeMedico/prontuario', component: ProntuarioMedicoComponent}, esse é o errado
  {path: 'homeMedico/perfilMeuPaciente', component: PerfilPacienteComponent},
  {path: 'homeMedico/listaDePacientes', component: ListaDePacientesComponent},
  {path: 'homeMedico/gerenciarConsultas', component: GerenciarConsultasComponent},
  {path: 'homePaciente/receitaCadastrada', component: ReceitaCadastradaComponent},
  {path: 'homeMedico/medicacoes1', component: MedicacoesComponent},
  {path: 'homeMedico/medicacoes2', component: Medicacoes2Component},

  {path: 'homeMedico/medicacoes3', component: Medicacoes3Component},
  {path: 'homeMedico/medicacoes2/cuidados', component: CuidadosComponent},
  {path: 'homeMedico/medicacoes1/cuidados', component: Cuidados1Component},
  {path: 'homeMedico/medicacoes3/cuidados', component: Cuidados3Component}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
