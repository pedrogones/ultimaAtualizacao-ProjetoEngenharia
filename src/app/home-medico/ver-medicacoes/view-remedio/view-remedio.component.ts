import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { VerMedicacoesComponent } from '../ver-medicacoes.component';
import { MedicacoesService } from '../medicacoes.service';
import { MedicamentosInterface } from '../medicamentosInterface';

@Component({
  selector: 'app-view-remedio',
  templateUrl: './view-remedio.component.html',
  styleUrls: ['./view-remedio.component.scss']
})
export class ViewRemedioComponent implements OnInit {
  cuidados:boolean=false;
  principal:boolean=true;
  changeDisplay(){
    if(this.cuidados){
      this.cuidados=false
      this.principal=true;
    }else{
      this.cuidados=true
      this.principal=false;
    }
  }


  remedioSelecionado: MedicamentosInterface | null = null; 
  public id?:number;
  public classeConteudo?: string;
  public nome?: string;
  public conteudoMecanismoDeAcao?: string;
  public compSimples?: string;
  public compDispersivel?: string;
  public acaoProlongada?: string;
  public suspensaoOral?: string;
  public linkRemedio?: string;
  public usoClinico1?: string;
  public usoClinico2?: string;
  public usoClinico3?: string;
  public posologia?: string;
  public contrIndicacao1?: string;
  public contrIndicacao2?: string;
  public contrIndicacao3?: string;
  public geral1?: string;
  public geral2?: string;
  public advertencia1?: string;
  public advertencia2?: string;
  public advertencia3?: string;
  public advertencia4?: string;
  public advertencia5?: string;
  public advertencia6?: string;
  public advertencia7?: string;
constructor(private route: ActivatedRoute, private sharedService: SharedService, private medicacoesService: MedicacoesService) {
  // Recupere o ID do medicamento da rota
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    // Agora você pode usar o ID para recuperar os detalhes do medicamento
    // por exemplo, procure o medicamento na sua matriz de medicamentos
  });

}


ngOnInit() {
  // Recupere o paciente selecionado do serviço
  this.remedioSelecionado = this.medicacoesService.getremedioSelecionado();

  if (this.remedioSelecionado) {
    console.log(this.remedioSelecionado); // Exibe o paciente selecionado no console para fins de depuração
    this.id = this.remedioSelecionado.id;
    this.classeConteudo = this.remedioSelecionado.classeConteudo;
    this.nome = this.remedioSelecionado.nome;
    this.conteudoMecanismoDeAcao = this.remedioSelecionado.conteudoMecanismoDeAcao;
    this.compSimples = this.remedioSelecionado.compSimples;
    this.compDispersivel = this.remedioSelecionado.compDispersivel;
    this.acaoProlongada = this.remedioSelecionado.acaoProlongada;
    this.suspensaoOral = this.remedioSelecionado.suspensaoOral;
    this.linkRemedio = this.remedioSelecionado.linkRemedio;
    this.usoClinico1 = this.remedioSelecionado.usoClinico1;
    this.usoClinico2 = this.remedioSelecionado.usoClinico2;
    this.usoClinico3 = this.remedioSelecionado.usoClinico3;
    this.posologia = this.remedioSelecionado.posologia;
    this.contrIndicacao1 = this.remedioSelecionado.contrIndicacao1;
    this.contrIndicacao2 = this.remedioSelecionado.contrIndicacao2;
    this.contrIndicacao3 = this.remedioSelecionado.contrIndicacao3;
    this.geral1 = this.remedioSelecionado.geral1;
    this.geral2 = this.remedioSelecionado.geral2;
    this.advertencia1 = this.remedioSelecionado.advertencia1;
    this.advertencia2 = this.remedioSelecionado.advertencia2;
    this.advertencia3 = this.remedioSelecionado.advertencia3;
    this.advertencia4 = this.remedioSelecionado.advertencia4;
    this.advertencia5 = this.remedioSelecionado.advertencia5;
    this.advertencia6 = this.remedioSelecionado.advertencia6;
    this.advertencia7 = this.remedioSelecionado.advertencia7; } else {
    console.log("Paciente não encontrado"); // Lida com o caso em que o pacienteSelecionado é nulo ou indefinido
  }
}


message(){
this.sharedService.dialogConfirm('Não ha paginas anteriores', false)
}
voltar(){
  this.sharedService.redirectVerMedicacoes()
}
}
