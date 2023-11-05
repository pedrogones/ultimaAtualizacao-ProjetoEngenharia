
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { VerificaMedicoComponent } from './verifica-medico/verifica-medico.component';
import { HomeMedicoComponent } from './home-medico/home-medico.component';
import { HomePacienteComponent } from './home-paciente/home-paciente.component';
import { ViewPerfilmedicoComponent } from './view-perfilmedico/view-perfilmedico.component';
import { PerfilPacienteComponent } from './home-medico/perfil-paciente/perfil-paciente.component';
import { ListaDePacientesComponent } from './lista-de-pacientes/lista-de-pacientes.component';
import { GerenciarConsultasComponent } from './home-medico/gerenciar-consultas/gerenciar-consultas.component';
import { ReceitaCadastradaComponent } from './home-medico/receita-cadastrada/receita-cadastrada.component';
import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';
import { EnviarReceitaComponent } from './home-medico/enviar-receita/enviar-receita.component';
import { VerMedicacoesComponent } from './home-medico/ver-medicacoes/ver-medicacoes.component';
import { ViewRemedioComponent } from './home-medico/ver-medicacoes/view-remedio/view-remedio.component';
import { CadastrarInfoComponent } from './home-medico/perfil-paciente/cadastrar-info/cadastrar-info.component';
import { CadastromedicoComponent } from './views/cadastromedico/cadastromedico.component';


const routes: Routes = [
  //declaração da rotas, na rota raiz a gente abre o LoginCompponent
  {path: '', component: HomeComponent},
  {path: 'cadastroMedico', component: CadastromedicoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'paciente', component: PacientesComponent},
  {path: 'entrarComoMedico', component: VerificaMedicoComponent},
  {path: 'homeMedico', component: HomeMedicoComponent},
  {path: 'homePaciente', component: HomePacienteComponent},
  {path: 'homePaciente/perfilMedico', component: ViewPerfilmedicoComponent},
  //{path: 'homeMedico/prontuario', component: ProntuarioMedicoComponent}, esse é o errado
  {path: 'homeMedico/perfilMeuPaciente', component: PerfilPacienteComponent},

  {path: 'homeMedico/perfilMeuPaciente/mudarInformacoes', component: CadastrarInfoComponent},
  {path: 'homeMedico/listaDePacientes', component: ListaDePacientesComponent},
  {path: 'homeMedico/gerenciarConsultas', component: GerenciarConsultasComponent},
  {path: 'homePaciente/receitaCadastrada', component: ReceitaCadastradaComponent},

  {path: 'homeMedico/enviarReceita', component: EnviarReceitaComponent},
  {path: 'homeMedico/verMedicacoes', component: VerMedicacoesComponent},
  {path: 'homeMedico/verMedicacoes/:id', component: ViewRemedioComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
