import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-medicacoes3',
  templateUrl: './medicacoes3.component.html',
  styleUrls: ['./medicacoes3.component.scss']
})
export class Medicacoes3Component {
  constructor(private sharedService: SharedService){

  }
 // Campos preenchidos com informações do medicamento Paracetamol
nomeRemedio = 'Cloridrato de Fexofenadina';
classeConteudo = 'Anti-histamínico';
conteudoMecanismoDeAcao = 'Compete com a histamina pelos locais do receptor H1 nas células efetoras do trato gastrointestinal, vasos sanguíneos e trato respiratório.';
compSimples = '60 mg (Allegra®, Fenaxxe®, Fexx®); 120 mg; 180 mg';
compDispersivel = 'Não disponível para a Cloridrato de Fexofenadina';
acaoProlongada = 'Não disponível para a Cloridrato de Fexofenadina';
suspensaoOral = '6 mg/mL (Allegra pediátrico®, Allexofedrin pediátrico®, Lexler®)';
linkRemedio = 'https://consultaremedios.com.br/cloridrato-de-fexofenadina/bula'; // Substitua XXXX pelo código correto, se disponível.
usoClinico1 = 'Rinite alérgica';
usoClinico2 = 'Rinite alérgica na infância';
usoClinico3 = 'Urticária';
posologia = 'Posologia de acordo com bula da Anvisa ou orientação do fabricante. Para conduta em cada doença, consulte uso clínico.';

message(dialogo: string){
  this.sharedService.dialogConfirm(dialogo, false)
  }
  redirectNext(rota: string){
    this.sharedService.redirectNext(rota)
}
cuidados(){
  this.sharedService.redirectCuidados('3')
}
voltar(){
  this.sharedService.redirectHomeMedico()
}
}
