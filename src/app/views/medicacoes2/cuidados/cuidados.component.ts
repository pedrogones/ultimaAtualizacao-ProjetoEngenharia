import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cuidados',
  templateUrl: './cuidados.component.html',
  styleUrls: ['./cuidados.component.scss']
})
export class CuidadosComponent {
    constructor(private sharedService: SharedService){

    }
  //campos para preencher com nome e informações do medicamento
  nomeRemedio= 'Paracetamol'
  classeConteudo= 'Hepatotoxicidade, sobretudo se em doses elevadas;'
  conteudoMecanismoDeAcao= ' Alterações laboratoriais: Aumento das transaminases.'
  compSimples= '  Hepatopatia grave (risco de toxicidade);'
  contrIndicacao1='Hipersensibilidade aos seus componentes, ao Propacetamol (outro analgésico e precursor do Paracetamol);'
  contrIndicacao2='Hepatopatia grave (risco de toxicidade);'
  contrIndicacao3='Menores de 12 anos (comprimidos revestidos).'
  compDispersivel= 'Menores de 12 anos (comprimidos revestidos).'
  geral1='Estas são orientações do fabricante presentes em bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos'
  geral2=''
  acaoProlongada= ' Hipersensibilidade aos seus componentes, ao Propacetamol (outro analgésico e precursor do Paracetamol);'
  linkRemedio= 'https://consultaremedios.com.br/paracetamol/bula'
  advertencia1= 'Função anormal do fígado e insuficiência hepatocelular;'
  advertencia2= '  Desordens hepatobiliares;'
  advertencia3= 'Deficiência em desidrogenase glicose-6-fosfato (a ocorrência de uma anemia hemolítica é possível devido à reduzida alocação de glutationa após a administração de Paracetamol);'
  advertencia4=' Administração concomitante de outros medicamentos contendo Paracetamol;'
  advertencia5='Problemas de nutrição ou em caso do paciente estar recebendo nutrição parenteral total;'
  advertencia6='Hipovolemia grave;'
  advertencia7= 'Não se deve exceder a dose diária máxima recomendada de Paracetamol, levando em consideração todos os medicamentos contendo Paracetamol em sua composição administrados por todas as vias de administração;  '
  posologia= 'Estas são orientações do fabricante presentes em bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas porSociedades e Órgãos'
  message(dialogo: string){
    this.sharedService.dialogConfirm(dialogo, false)
    }
    redirectNext(rota: string){
      this.sharedService.redirectNext(rota)
  }
  cuidados(){
    this.sharedService.redirectCuidados('2')
  }
  principal(){
    this.sharedService.redirectNext('2')
  }
  voltar(){
    this.sharedService.redirectHomeMedico();
  }
  }


