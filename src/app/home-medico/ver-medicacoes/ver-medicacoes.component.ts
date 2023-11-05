import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MedicamentosInterface } from './medicamentosInterface';
import { MedicacoesService } from './medicacoes.service';

export interface MedicacoesTable {
  id?:number;
  classeConteudo?: string;
  nome?: string;
  conteudoMecanismoDeAcao?: string;
  compSimples?: string;
  compDispersivel?: string;
  acaoProlongada?: string;
  suspensaoOral?: string;
  linkRemedio?: string;
  usoClinico1?: string;
  usoClinico2?: string;
  usoClinico3?: string;
  posologia?: string;
  contrIndicacao1?: string;
  contrIndicacao2?: string;
  contrIndicacao3?: string;
  geral1?: string;
  geral2?: string;
  advertencia1?: string;
  advertencia2?: string;
  advertencia3?: string;
  advertencia4?: string;
  advertencia5?: string;
  advertencia6?: string;
  advertencia7?: string;

}

const MEDICACOES_DATA: MedicacoesTable[] = [
  {
    id:1,
    nome: 'Nimesulida',
    classeConteudo: 'Anti-inflamatório não esteroidal',
    usoClinico1: 'Tratamento da dor e inflamação associadas a condições como artrite.',
usoClinico2: 'Alívio da dor pós-operatória.',
usoClinico3: 'Controle da dor e inflamação em lesões musculares e articulares.',

    conteudoMecanismoDeAcao: 'Nimesulida inibe a síntese de prostaglandinas, reduzindo a atividade da ciclo-oxigenase 2 (COX-2). Age através da redução da formação de ânion superóxido (O2), bem como pela inibição da PDE-4, eliminação de ácido hipocloroso, inibição de proteases (elastase, colagenase), prevenção da inativação de inibidores de alfa-1 protease e inibição da atividade da histamina.',
    compSimples: '100 mg (Nisulid®, Maxulid100®, Nimesilam®, Neosulida®, Inflalid®, Scaflogin®, Scalid®, Cimelide®, Nisufar®, Niflag®, Nortilid®, genérico);',
    contrIndicacao1: 'Histórico de hipersensibilidade à nimesulida ou a outros anti-inflamatórios não esteroidais.',
    contrIndicacao2: 'Insuficiência hepática grave.',
    contrIndicacao3: 'Hemorragia gastrointestinal ativa ou histórico de úlcera péptica ou hemorragia recorrente.',
    compDispersivel: '100 mg (Nisulid®, Nortilid®, Prexulid®);',
    geral1: 'Essas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: '',
    acaoProlongada: '200 mg (Arflex retard®)',
    linkRemedio: 'https://consultaremedios.com.br/nimesulida/bula',
    advertencia1: 'Efeitos adversos gastrointestinais, como úlcera péptica e hemorragia, podem ocorrer.',
    advertencia2: 'Risco de disfunção hepática, incluindo hepatite e icterícia.',
    advertencia3: 'Risco de reações cutâneas graves, incluindo síndrome de Stevens-Johnson e necrólise epidérmica tóxica.',
    advertencia4: 'A administração concomitante de nimesulida com outros anti-inflamatórios não esteroidais deve ser evitada.',
    advertencia5: 'Deve-se ter precaução em pacientes com problemas de nutrição ou pacientes que estejam recebendo nutrição parenteral total.',
    advertencia6: 'Não deve ser usado em pacientes com hipovolemia grave.',
    advertencia7: 'A dose diária máxima recomendada de nimesulida não deve ser excedida, considerando todos os medicamentos contendo nimesulida em sua composição administrados por todas as vias de administração.',
    posologia: 'Essas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.'
  },
  {
    id:2,
    nome: 'Paracetamol',
    classeConteudo: 'Analgésico',
    conteudoMecanismoDeAcao: 'Acredita-se que os efeitos analgésicos sejam devidos à ativação de vias inibitórias serotoninérgicas descendentes no SNC. A antipirese ocorre através de ação no centro hipotalâmico que regula a temperatura.',
    compSimples: '500 mg (Tylaflex, FUNED Paracetamol, IQUEGO-Paracetamol, LFM-Paracetamol, Dorfen, Gripalcê Uno, Tyflen, Tylidol);',
    contrIndicacao1: 'Hipersensibilidade aos seus componentes, ao Propacetamol (outro analgésico e precursor do Paracetamol);',
    contrIndicacao2: 'Hepatopatia grave (risco de toxicidade);',
    contrIndicacao3: 'Menores de 12 anos (comprimidos revestidos).',
    compDispersivel: 'Menores de 12 anos (comprimidos revestidos).',
    geral1: 'Estas são orientações do fabricante presentes em bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: '',
    usoClinico1: 'Alívio de dor de cabeça comum.',
usoClinico2: 'Redução da febre em caso de infecções leves.',
usoClinico3: 'Alívio da dor associada a resfriados e gripes.',

    acaoProlongada: 'Hipersensibilidade aos seus componentes, ao Propacetamol (outro analgésico e precursor do Paracetamol);',
    linkRemedio: 'https://consultaremedios.com.br/paracetamol/bula',
    advertencia1: 'Função anormal do fígado e insuficiência hepatocelular;',
    advertencia2: 'Desordens hepatobiliares;',
    advertencia3: 'Deficiência em desidrogenase glicose-6-fosfato (a ocorrência de uma anemia hemolítica é possível devido à reduzida alocação de glutationa após a administração de Paracetamol);',
    advertencia4: 'Administração concomitante de outros medicamentos contendo Paracetamol;',
    advertencia5: 'Problemas de nutrição ou em caso do paciente estar recebendo nutrição parenteral total;',
    advertencia6: 'Hipovolemia grave;',
    advertencia7: 'Não se deve exceder a dose diária máxima recomendada de Paracetamol, levando em consideração todos os medicamentos contendo Paracetamol em sua composição administrados por todas as vias de administração;',
    posologia: 'Estas são orientações do fabricante presentes em bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.'
    },
     {
      id:3,
      nome: 'Cloridrato de Fexofenadina',
      classeConteudo: 'Anti-histamínico',
      conteudoMecanismoDeAcao: 'Compete com a histamina pelos locais do receptor H1 nas células efetoras do trato gastrointestinal, vasos sanguíneos e trato respiratório.',
      compSimples: '60 mg (Allegra®, Fenaxxe®, Fexx®); 120 mg; 180 mg',
      contrIndicacao1: 'Hipersensibilidade aos seus componentes, ao Propacetamol (outro analgésico e precursor do Paracetamol);',
      contrIndicacao2: 'Hepatopatia grave (risco de toxicidade);',
      contrIndicacao3: 'Menores de 12 anos (comprimidos revestidos).',
      usoClinico1: 'Tratamento da rinite alérgica sazonal (febre do feno) com sintomas como espirros, coriza e coceira no nariz.',
usoClinico2: 'Alívio de coceira e urticária causada por alergias na pele.',
usoClinico3: 'Controle dos sintomas alérgicos, como coceira nos olhos, causados por alérgenos ambientais.',

      compDispersivel: 'Não disponível para a Cloridrato de Fexofenadina',
      geral1: 'Estas são orientações do fabricante presentes em bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos',
      geral2: '',
      acaoProlongada: 'Não disponível para a Cloridrato de Fexofenadina',
      linkRemedio: 'https://consultaremedios.com.br/cloridrato-de-fexofenadina/bula',
      advertencia1: 'Função anormal do fígado e insuficiência hepatocelular;',
      advertencia2: 'Desordens hepatobiliares;',
      advertencia3: 'Deficiência em desidrogenase glicose-6-fosfato (a ocorrência de uma anemia hemolítica é possível devido à reduzida alocação de glutationa após a administração de Paracetamol);',
      advertencia4: 'Administração concomitante de outros medicamentos contendo Paracetamol;',
      advertencia5: 'Problemas de nutrição ou em caso do paciente estar recebendo nutrição parenteral total;',
      advertencia6: 'Hipovolemia grave;',
      advertencia7: 'Não se deve exceder a dose diária máxima recomendada de Paracetamol, levando em consideração todos os medicamentos contendo Paracetamol em sua composição administrados por todas as vias de administração;',
      posologia: 'Estas são orientações do fabricante presentes em bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.'
    },];
@Component({
  selector: 'app-ver-medicacoes',
  templateUrl: './ver-medicacoes.component.html',
  styleUrls: ['./ver-medicacoes.component.scss']
})
export class VerMedicacoesComponent {

  constructor(private sharedService: SharedService, private router: Router, private medicamentoService: MedicacoesService){

  }
  displayedColumns: string[] = ['nome', 'classeConteudo'];
  dataSource = new MatTableDataSource<MedicacoesTable>(MEDICACOES_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  back(){
    this.sharedService.redirectHomeMedico()
  }
  voltar(){
    this.sharedService.redirectHomeMedico()
  }
   
  verDetalhes(medicamento: MedicamentosInterface) {
    this.medicamentoService.setremedioSelecionado(medicamento)
    const nomePaciente = this.medicamentoService.getnomeRemedio()
    console.log("Testando: "+ nomePaciente)
    this.sharedService.redirectRemedioSelected(medicamento);
    // Navega para a tela de detalhes e passa o ID (ou outras informações) do medicamento
  }


}
