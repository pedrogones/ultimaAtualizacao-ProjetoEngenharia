import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-medicacoes2',
  templateUrl: './medicacoes2.component.html',
  styleUrls: ['./medicacoes2.component.scss']
})
export class Medicacoes2Component {
  constructor(private sharedService: SharedService){

  }
//campos para preencher com nome e informações do medicamento
nomeRemedio= 'Paracetamol'
classeConteudo= 'Analgésico'
conteudoMecanismoDeAcao= ' Acredita-se que os efeitos analgésicos sejam devidos à ativação de vias inibitórias serotoninérgicas descendentes no SNC. A antipirese ocorre através de ação no centro hipotalâmico que regula a temperatura.'
compSimples= '500 mg (Tylaflex, FUNED Paracetamol, IQUEGO-Paracetamol, LFM-Paracetamol, Dorfen, Gripalcê Uno, Tyflen, Tylidol);'
compDispersivel= '100 mg (Nisulid®, Nortilid®, Prexulid®)'
acaoProlongada= '750 mg (Cimegripe Dor e Febre, Tylaflex, Cyfenol, Paramol, Termol, Tylalgin, Tylidol, Dorfen, Gripalcê Uno®, Tyflen).200 mg (Arflex retard®)'
suspensaoOral= ' 32 mg/mL (Cimegripe, Tylenol, Tylemax, Gripalcê Uno, Tyflen);'
linkRemedio= 'https=//www.bulas.med.br/p/bulas-de-medicamentos/bula/3168/nisulid-comprimido.htm'
usoClinico1= 'Dor crônica'
usoClinico2= 'Febre recorrente'
usoClinico3= 'Crise de cefaleia'
posologia= 'Posologia de acordo com bula da Anvisa ou orientação do fabricante. Para conduta em cada doença, consulte uso clínico.'
message(dialogo: string){
  this.sharedService.dialogConfirm(dialogo, false)
  }
  redirectNext(rota: string){
    this.sharedService.redirectNext(rota)
}
cuidados(){
  this.sharedService.redirectCuidados('2')
}
voltar(){
  this.sharedService.redirectHomeMedico()
}
}

