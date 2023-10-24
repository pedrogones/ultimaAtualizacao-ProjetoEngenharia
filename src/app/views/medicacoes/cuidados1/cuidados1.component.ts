import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cuidados1',
  templateUrl: './cuidados1.component.html',
  styleUrls: ['./cuidados1.component.scss']
})
export class Cuidados1Component {
  constructor(private sharedService: SharedService){

  }
//campos para preencher com nome e informações do medicamento
 //campos para preencher com nome e informações do medicamento
 nomeRemedio= 'Nimesulida'
conteudoMecanismoDeAcao = 'Inibição da enzima ciclo-oxigenase (COX), reduzindo a produção de prostaglandinas.';
compSimples = 'Úlcera péptica ativa, histórico de hipersensibilidade à nimesulida ou a outros anti-inflamatórios não esteroidais.';
contrIndicacao1 = 'Histórico de hipersensibilidade à nimesulida ou a outros anti-inflamatórios não esteroidais.';
contrIndicacao2 = 'Insuficiência hepática grave.';
contrIndicacao3 = 'Hemorragia gastrointestinal ativa ou histórico de úlcera péptica ou hemorragia recorrente.';
compDispersivel = 'Histórico de hipersensibilidade à nimesulida ou a outros anti-inflamatórios não esteroidais.';
geral1 = 'Essas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.';
geral2 = '';
acaoProlongada = 'Histórico de hipersensibilidade à nimesulida ou a outros anti-inflamatórios não esteroidais.';
linkRemedio = 'https://consultaremedios.com.br/nimesulida/bula';
advertencia1 = 'Efeitos adversos gastrointestinais, como úlcera péptica e hemorragia, podem ocorrer.';
advertencia2 = 'Risco de disfunção hepática, incluindo hepatite e icterícia.';
advertencia3 = 'Risco de reações cutâneas graves, incluindo síndrome de Stevens-Johnson e necrólise epidérmica tóxica.';
advertencia4 = 'A administração concomitante de nimesulida com outros anti-inflamatórios não esteroidais deve ser evitada.';
advertencia5 = 'Deve-se ter precaução em pacientes com problemas de nutrição ou pacientes que estejam recebendo nutrição parenteral total.';
advertencia6 = 'Não deve ser usado em pacientes com hipovolemia grave.';
advertencia7 = 'A dose diária máxima recomendada de nimesulida não deve ser excedida, considerando todos os medicamentos contendo nimesulida em sua composição administrados por todas as vias de administração.';
posologia = 'Essas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.';
message(dialogo: string){
  this.sharedService.dialogConfirm(dialogo, false)
  }
  redirectNext(rota: string){
    this.sharedService.redirectNext(rota)
}
cuidados(){
  this.sharedService.redirectCuidados('1')
}
principal(){
  this.sharedService.redirectNext('1')
}
voltar(){
  this.sharedService.redirectHomeMedico();
}
}
