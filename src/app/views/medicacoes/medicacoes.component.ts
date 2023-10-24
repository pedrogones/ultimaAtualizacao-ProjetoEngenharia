import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-medicacoes',
  templateUrl: './medicacoes.component.html',
  styleUrls: ['./medicacoes.component.scss']
})
export class MedicacoesComponent {
  constructor(private sharedService: SharedService){

  }
  //campos para preencher com nome e informações do medicamento
  nomeRemedio = 'Nimesulida'
  classeConteudo = 'Anti-inflamatório não esteroidal'
  conteudoMecanismoDeAcao='Nimesulida inibe a síntese de prostaglandinas, reduzindo a atividade da  ciclo-oxigenase 2 (COX-2). Age através da redução da formação de ânion superóxido (O2), bem  como pela inibição da PDE-4, eliminação de ácido hipocloroso, inibição de proteases (elastase, colagenase), prevenção da inativação de inibidores de alfa-1 protease e inibição da atividade da histamina.'
  compSimples='100 mg (Nisulid®, Maxulid100®, Nimesilam®, Neosulida®, Inflalid®, Scaflogin®, Scalid®, Cimelide®, Nisufar®, Niflag®, Nortilid®, genérico);'
  compDispersivel='100 mg (Nisulid®, Nortilid®, Prexulid®);'
  acaoProlongada='200 mg (Arflex retard®)'
  suspensaoOral='50 mg/mL (Nisulid®, Nimesilam®, Inflalid®, Nimesulix®, Cimelide®, Nisoflan®, Niflag®, Nortilid®, Scaflogin®, genérico).'
  linkRemedio='https://www.bulas.med.br/p/bulas-de-medicamentos/bula/3168/nisulid-comprimido.htm'
  usoClinico1='Burcite;'
  usoClinico2='Lombalgia;'
  usoClinico3='Torcicolo;'
  posologia='Posologia de acordo com a bula da Anvisa ou orientação do fabricante. Para a consuta em cada doença, consulte uso clínico'


message(){
this.sharedService.dialogConfirm('Não ha paginas anteriores', false)
}
redirectNext(rota: string){
this.sharedService.redirectNext(rota);
}
voltar(){
  this.sharedService.redirectHomeMedico()
}
cuidados(){
  this.sharedService.redirectCuidados('1')
}
}
