import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MedicamentosInterface } from './medicamentosInterface';
import { MedicacoesService } from './medicacoes.service';

export interface MedicacoesTable {
  id?: number;
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
  },
  {
    id: 4,
    nome: 'Amoxicilina',
    classeConteudo: 'Antibiótico',
    conteudoMecanismoDeAcao: 'A Amoxicilina pertence ao grupo das penicilinas e atua inibindo a síntese da parede celular das bactérias. Esse mecanismo de ação resulta na fragilização das bactérias e sua subsequente morte, tornando-a eficaz no tratamento de infecções bacterianas.',
    compSimples: '500 mg (Amoxil®, Amoxicilina Genérica)',
    contrIndicacao1: 'Histórico de hipersensibilidade à Amoxicilina ou a outras penicilinas.',
    contrIndicacao2: 'Infecções virais, como resfriado comum, não respondem à Amoxicilina e seu uso é inapropriado nesses casos.',
    contrIndicacao3: 'Pacientes com histórico de distúrbios gastrointestinais graves devem ser avaliados por um médico antes de iniciar o tratamento com Amoxicilina.',
    compDispersivel: 'Não encontrado',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: 'Não encontrado',
    acaoProlongada: 'Não encontrado',
    linkRemedio: 'https://consultaremedios.com.br/amoxicilina/bula',
    advertencia1: 'Efeitos adversos, como reações alérgicas graves, podem ocorrer. Em caso de reação alérgica, suspenda o uso e procure assistência médica imediatamente.',
    advertencia2: 'O uso inadequado ou prolongado de antibióticos, como a Amoxicilina, pode resultar no desenvolvimento de bactérias resistentes a esses medicamentos.',
    advertencia3: 'Mantenha este medicamento fora do alcance de crianças e em local fresco e seco, de acordo com as instruções da embalagem.',
    advertencia4: 'Não encontrado',
    advertencia5: 'Não encontrado',
    advertencia6: 'Não encontrado',
    advertencia7: 'Não encontrado',
    posologia: 'A dosagem recomendada de Amoxicilina varia de acordo com o tipo de infecção e a idade do paciente. Siga sempre as orientações do médico ou as informações da bula do medicamento para garantir o tratamento adequado.'
  },
  {
    id: 5,
    nome: 'Ibuprofeno',
    classeConteudo: 'Anti-inflamatório não esteroidal',
    conteudoMecanismoDeAcao: 'O Ibuprofeno inibe a enzima ciclo-oxigenase, reduzindo a produção de prostaglandinas. Isso resulta em redução da inflamação, dor e febre.',
    compSimples: '400 mg (Advil®, Ibupril®, Genérico)',
    contrIndicacao1: 'Histórico de hipersensibilidade ao Ibuprofeno ou a outros anti-inflamatórios não esteroidais.',
    contrIndicacao2: 'Úlcera péptica ativa, distúrbios hemorrágicos ou insuficiência renal grave.',
    contrIndicacao3: 'Gravidez, especialmente no último trimestre.',
    compDispersivel: '400 mg (Advil® Dissolve)',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: 'Não encontrado',
    acaoProlongada: '600 mg (Alivium®)',
    linkRemedio: 'https://consultaremedios.com.br/ibuprofeno/bula',
    advertencia1: 'Efeitos adversos gastrointestinais, como úlcera péptica e hemorragia, podem ocorrer. Use com cautela e sob orientação médica.',
    advertencia2: 'Risco de disfunção renal em pacientes com insuficiência renal pré-existente.',
    advertencia3: 'Pode aumentar o risco de eventos cardiovasculares graves. Consulte um médico antes de usar regularmente.',
    advertencia4: 'A administração concomitante de Ibuprofeno com outros anti-inflamatórios não esteroidais deve ser evitada.',
    advertencia5: 'Pode causar reações alérgicas em algumas pessoas. Interrompa o uso se ocorrerem sintomas de alergia.',
    advertencia6: 'Não deve ser usado em pacientes com história de distúrbios de coagulação sanguínea.',
    advertencia7: 'Siga as instruções da embalagem e evite o uso prolongado sem supervisão médica.',
    posologia: 'As dosagens recomendadas variam de acordo com a idade e a condição. Consulte a bula ou um médico para orientações específicas.'
  },
  {
    id: 6,
    nome: 'Ciprofloxacino',
    classeConteudo: 'Antibiótico',
    conteudoMecanismoDeAcao: 'O Ciprofloxacino é um antibiótico que inibe a enzima DNA girase nas bactérias, impedindo a replicação do DNA e levando à morte das bactérias.',
    compSimples: '500 mg (Cipro®, Genérico)',
    contrIndicacao1: 'Histórico de hipersensibilidade ao Ciprofloxacino, a outros quinolonas ou a componentes da fórmula.',
    contrIndicacao2: 'Gravidez e lactação devem ser discutidas com um profissional de saúde antes do uso.',
    contrIndicacao3: 'Evite a exposição solar excessiva durante o tratamento, pois pode aumentar a sensibilidade à luz solar.',
    compDispersivel: 'Não encontrado',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: 'Não encontrado',
    acaoProlongada: 'Não encontrado',
    linkRemedio: 'https://consultaremedios.com.br/ciprofloxacino/bula',
    advertencia1: 'Efeitos adversos, como reações alérgicas graves, podem ocorrer. Em caso de reação alérgica, suspenda o uso e procure assistência médica imediatamente.',
    advertencia2: 'O uso indevido ou prolongado de antibióticos pode resultar no desenvolvimento de bactérias resistentes a esses medicamentos.',
    advertencia3: 'Mantenha fora do alcance de crianças e em local fresco e seco, de acordo com as instruções da embalagem.',
    advertencia4: 'Não encontrado',
    advertencia5: 'Não encontrado',
    advertencia6: 'Não encontrado',
    advertencia7: 'Não encontrado',
    posologia: 'A dosagem recomendada de Ciprofloxacino varia de acordo com o tipo de infecção e a idade do paciente. Siga sempre as orientações do médico ou as informações da bula do medicamento para garantir o tratamento adequado.'
  },
  {
    id: 7,
    nome: 'Sertralina',
    classeConteudo: 'Antidepressivo',
    conteudoMecanismoDeAcao: 'A Sertralina é um inibidor seletivo da recaptação de serotonina (ISRS), que aumenta os níveis de serotonina no cérebro, ajudando a melhorar o humor e tratar a depressão.',
    compSimples: '50 mg (Zoloft®, Sertralina Genérica)',
    contrIndicacao1: 'Histórico de hipersensibilidade à Sertralina ou a outros ISRS.',
    contrIndicacao2: 'Uso concomitante com inibidores da monoaminoxidase (IMAOs) ou pimozida.',
    contrIndicacao3: 'Crianças e adolescentes com menos de 18 anos, a menos que especificamente indicado pelo médico.',
    compDispersivel: 'Não encontrado',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: 'Não encontrado',
    acaoProlongada: 'Não encontrado',
    linkRemedio: 'https://consultaremedios.com.br/sertralina/bula',
    advertencia1: 'A Sertralina pode causar efeitos colaterais, como sonolência e tontura. Evite atividades que exijam atenção até saber como você reage ao medicamento.',
    advertencia2: 'Pode haver um aumento temporário da ansiedade no início do tratamento. Informe seu médico se isso ocorrer.',
    advertencia3: 'A interrupção abrupta do tratamento com Sertralina pode levar a sintomas de descontinuação. Consulte seu médico antes de interromper o uso.',
    advertencia4: 'Pode aumentar o risco de pensamentos ou comportamentos suicidas em alguns pacientes, especialmente no início do tratamento. Acompanhamento médico é essencial.',
    advertencia5: 'Informe seu médico sobre todos os medicamentos que está tomando, pois a Sertralina pode interagir com outras substâncias.',
    advertencia6: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    advertencia7: 'Não encontrado',
    posologia: 'A dosagem de Sertralina varia de acordo com a condição e a resposta do paciente ao tratamento. Siga sempre as orientações do médico para determinar a dosagem adequada.'
  },
  {
    id: 8,
    nome: 'Losartan',
    classeConteudo: 'Anti-hipertensivo',
    conteudoMecanismoDeAcao: 'O Losartan é um bloqueador dos receptores de angiotensina II, que relaxa os vasos sanguíneos e ajuda a reduzir a pressão arterial elevada.',
    compSimples: '50 mg (Cozaar®, Losartan Genérico)',
    contrIndicacao1: 'Histórico de hipersensibilidade ao Losartan ou a outros medicamentos semelhantes.',
    contrIndicacao2: 'Gravidez, especialmente no segundo e terceiro trimestres, pode causar danos ao feto.',
    contrIndicacao3: 'Pacientes com insuficiência hepática grave devem evitar o uso de Losartan.',
    compDispersivel: 'Não encontrado',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: 'Não encontrado',
    acaoProlongada: 'Não encontrado',
    linkRemedio: 'https://consultaremedios.com.br/losartan/bula',
    advertencia1: 'A Losartan pode causar tontura ou sonolência, portanto, tenha cuidado ao dirigir ou operar máquinas.',
    advertencia2: 'O uso de Losartan pode afetar os níveis de potássio no sangue. Monitore seus níveis de potássio conforme indicado pelo médico.',
    advertencia3: 'Informe seu médico sobre todos os medicamentos que está tomando, pois pode haver interações com outros medicamentos.',
    advertencia4: 'Em caso de inchaço facial, lábios, língua ou garganta, pare de tomar Losartan e procure ajuda médica imediatamente, pois pode ser um sinal de reação alérgica grave.',
    advertencia5: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    advertencia6: 'Não encontrado',
    advertencia7: 'Não encontrado',
    posologia: 'A dosagem de Losartan é determinada pelo médico, com base na pressão arterial do paciente e na condição clínica. Siga as orientações do seu médico.'
  },
  {
    id: 9,
    nome: 'Atorvastatina',
    classeConteudo: 'Hipolipemiante',
    conteudoMecanismoDeAcao: 'A Atorvastatina é uma estatina que reduz o colesterol no sangue inibindo a enzima HMG-CoA redutase, responsável pela produção de colesterol no fígado.',
    compSimples: '20 mg (Lipitor®, Atorvastatina Genérica)',
    contrIndicacao1: 'Histórico de hipersensibilidade à Atorvastatina ou a outros componentes da fórmula.',
    contrIndicacao2: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    contrIndicacao3: 'Pacientes com doença hepática ativa ou desequilíbrio não controlado de tireoide devem evitar o uso de Atorvastatina.',
    compDispersivel: '',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: '',
    acaoProlongada: '',
    linkRemedio: 'https://consultaremedios.com.br/atorvastatina/bula',
    advertencia1: 'Pode haver risco de miopatia (fraqueza muscular) com o uso de Atorvastatina. Informe ao médico sobre quaisquer sintomas musculares incomuns.',
    advertencia2: 'A Atorvastatina pode afetar as enzimas hepáticas, portanto, exames regulares do fígado são recomendados durante o tratamento.',
    advertencia3: 'Informe seu médico sobre todos os medicamentos que está tomando, pois pode haver interações com outros medicamentos.',
    advertencia4: 'O consumo excessivo de álcool deve ser evitado durante o tratamento com Atorvastatina.',
    advertencia5: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    advertencia6: '',
    advertencia7: '',
    posologia: 'A dosagem de Atorvastatina é determinada pelo médico, com base nos níveis de colesterol do paciente e sua condição clínica. Siga as orientações do seu médico.'
  },
  {
    id: 10,
    nome: 'Metformina',
    classeConteudo: 'Antidiabético',
    conteudoMecanismoDeAcao: 'A Metformina ajuda a controlar o açúcar no sangue reduzindo a produção de glicose no fígado e aumentando a sensibilidade à insulina nos tecidos.',
    compSimples: '500 mg (Glifage®, Metformina Genérica)',
    contrIndicacao1: 'Histórico de hipersensibilidade à Metformina ou a componentes da fórmula.',
    contrIndicacao2: 'Insuficiência renal grave, doença hepática ativa ou acidose láctica.',
    contrIndicacao3: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    compDispersivel: '',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: '',
    acaoProlongada: '',
    linkRemedio: 'https://consultaremedios.com.br/metformina/bula',
    advertencia1: 'A Metformina pode causar distúrbios gastrointestinais, como diarreia e náuseas. Estes sintomas geralmente diminuem com o tempo.',
    advertencia2: 'Monitoramento regular da função renal é importante durante o tratamento com Metformina.',
    advertencia3: 'Informe seu médico sobre todos os medicamentos que está tomando, pois pode haver interações com outros medicamentos.',
    advertencia4: 'A Metformina pode causar uma redução nas concentrações de vitamina B12 no organismo, portanto, é recomendável verificar os níveis de vitamina B12 periodicamente.',
    advertencia5: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    advertencia6: '',
    advertencia7: '',
    posologia: 'A dosagem de Metformina varia de acordo com as necessidades do paciente e a resposta ao tratamento. Siga as orientações do seu médico para determinar a dosagem adequada.'
  },
  {
    id: 11,
    nome: 'Clopidogrel',
    classeConteudo: 'Anticoagulante',
    conteudoMecanismoDeAcao: 'O Clopidogrel inibe a ativação de plaquetas sanguíneas, reduzindo a formação de coágulos e prevenindo eventos trombóticos, como infarto do miocárdio e AVC.',
    compSimples: '75 mg (Plavix®, Clopidogrel Genérico)',
    contrIndicacao1: 'Histórico de hipersensibilidade ao Clopidogrel ou a componentes da fórmula.',
    contrIndicacao2: 'Sangramento ativo ou distúrbios hemorrágicos significativos.',
    contrIndicacao3: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    compDispersivel: '',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: '',
    acaoProlongada: '',
    linkRemedio: 'https://consultaremedios.com.br/clopidogrel/bula',
    advertencia1: 'A Clopidogrel aumenta o risco de sangramento. Informe ao médico sobre qualquer sinal de sangramento incomum, como sangramento gengival ou hematomas.',
    advertencia2: 'A interrupção abrupta do tratamento com Clopidogrel pode aumentar o risco de eventos trombóticos. Consulte seu médico antes de interromper o uso.',
    advertencia3: 'Informe seu médico sobre todos os medicamentos que está tomando, pois pode haver interações com outros medicamentos.',
    advertencia4: 'A combinação de Clopidogrel com certos medicamentos, como omeprazol, pode diminuir a eficácia do Clopidogrel. Converse com seu médico sobre quais medicamentos você pode tomar em conjunto.',
    advertencia5: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    advertencia6: '',
    advertencia7: '',
    posologia: 'A dosagem de Clopidogrel é determinada pelo médico e depende das necessidades do paciente, como a prevenção de eventos cardiovasculares. Siga as orientações do seu médico.'
  },
  {
    id: 12,
    nome: 'Fluoxetina',
    classeConteudo: 'Antidepressivo',
    conteudoMecanismoDeAcao: 'A Fluoxetina é um inibidor seletivo da recaptação de serotonina (ISRS), que aumenta os níveis de serotonina no cérebro, ajudando a melhorar o humor e tratar a depressão e outros transtornos de humor.',
    compSimples: '20 mg (Prozac®, Fluoxetina Genérica)',
    contrIndicacao1: 'Histórico de hipersensibilidade à Fluoxetina ou a outros ISRS.',
    contrIndicacao2: 'Uso concomitante com inibidores da monoaminoxidase (IMAOs) ou pimozida.',
    contrIndicacao3: 'Crianças com menos de 7 anos, a menos que especificamente indicado pelo médico.',
    compDispersivel: '',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: '',
    acaoProlongada: '',
    linkRemedio: 'https://consultaremedios.com.br/fluoxetina/bula',
    advertencia1: 'A Fluoxetina pode causar efeitos colaterais, como agitação, insônia e nervosismo, especialmente no início do tratamento.',
    advertencia2: 'Pode haver um aumento temporário dos pensamentos suicidas em alguns pacientes, especialmente no início do tratamento. Acompanhamento médico é essencial.',
    advertencia3: 'A interrupção abrupta do tratamento com Fluoxetina pode levar a sintomas de descontinuação. Consulte seu médico antes de interromper o uso.',
    advertencia4: 'Informe seu médico sobre todos os medicamentos que está tomando, pois a Fluoxetina pode interagir com outras substâncias.',
    advertencia5: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    advertencia6: '',
    advertencia7: '',
    posologia: 'A dosagem de Fluoxetina é determinada pelo médico e varia de acordo com o transtorno tratado. Siga as orientações do seu médico para determinar a dosagem adequada.'
  },
  {
    id: 13,
    nome: 'Risperidona',
    classeConteudo: 'Antipsicótico',
    conteudoMecanismoDeAcao: 'A Risperidona atua como antagonista de receptores de dopamina e serotonina, controlando sintomas de transtornos psicóticos, como esquizofrenia e transtorno bipolar.',
    compSimples: '2 mg (Risperdal®, Risperidona Genérica)',
    contrIndicacao1: 'Histórico de hipersensibilidade à Risperidona ou a outros antipsicóticos.',
    contrIndicacao2: 'Gravidez e lactação devem ser discutidas com um profissional de saúde antes do uso.',
    contrIndicacao3: 'Crianças com menos de 5 anos, a menos que especificamente indicado pelo médico.',
    compDispersivel: '',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: '',
    acaoProlongada: '',
    linkRemedio: 'https://consultaremedios.com.br/risperidona/bula',
    advertencia1: 'A Risperidona pode causar efeitos colaterais, como sonolência e ganho de peso. Discuta com seu médico sobre os riscos e benefícios do tratamento.',
    advertencia2: 'Pode aumentar o risco de acidente vascular cerebral (AVC) em idosos com demência. Converse com seu médico sobre os riscos.',
    advertencia3: 'Monitoramento regular da função renal e hepática é importante durante o tratamento com Risperidona.',
    advertencia4: 'Informe seu médico sobre todos os medicamentos que está tomando, pois a Risperidona pode interagir com outras substâncias.',
    advertencia5: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    advertencia6: '',
    advertencia7: '',
    posologia: 'A dosagem de Risperidona é determinada pelo médico e varia de acordo com o transtorno tratado. Siga as orientações do seu médico para determinar a dosagem adequada.'
  },
  {
    id: 14,
    nome: 'Levotiroxina',
    classeConteudo: 'Hormônio tireoidiano',
    conteudoMecanismoDeAcao: 'A Levotiroxina é uma forma sintética do hormônio tireoidiano T4, que é convertida em T3 no corpo e ajuda a normalizar a função da tireoide em pacientes com hipotireoidismo.',
    compSimples: '50 mcg (Euthyrox®, Levotiroxina Genérica)',
    contrIndicacao1: 'Histórico de hipersensibilidade à Levotiroxina ou a componentes da fórmula.',
    contrIndicacao2: 'Hipertireoidismo não tratado ou instável.',
    contrIndicacao3: 'Gravidez e lactação devem ser discutidas com um profissional de saúde antes do uso.',
    compDispersivel: '',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: '',
    acaoProlongada: '',
    linkRemedio: 'https://consultaremedios.com.br/levotiroxina/bula',
    advertencia1: 'A dosagem de Levotiroxina deve ser cuidadosamente ajustada pelo médico, pois o uso excessivo pode causar hipertireoidismo.',
    advertencia2: 'Informe seu médico sobre todos os medicamentos que está tomando, pois a Levotiroxina pode interagir com outras substâncias.',
    advertencia3: 'A interrupção abrupta do tratamento com Levotiroxina pode resultar em desequilíbrio da função tireoidiana. Consulte seu médico antes de interromper o uso.',
    advertencia4: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    advertencia5: '',
    advertencia6: '',
    advertencia7: '',
    posologia: 'A dosagem de Levotiroxina é individualizada e determinada pelo médico com base nos níveis de hormônio tireoidiano e na resposta do paciente. Siga as orientações do seu médico para determinar a dosagem adequada.'
  },
  {
    id: 15,
    nome: 'Enalapril',
    classeConteudo: 'Anti-hipertensivo',
    conteudoMecanismoDeAcao: 'O Enalapril é um inibidor da enzima conversora de angiotensina (ECA), que relaxa os vasos sanguíneos e reduz a pressão arterial, além de melhorar a função cardíaca em pacientes com insuficiência cardíaca.',
    compSimples: '10 mg (Renitec®, Enalapril Genérico)',
    contrIndicacao1: 'Histórico de hipersensibilidade ao Enalapril ou a outros inibidores da ECA.',
    contrIndicacao2: 'Gravidez, especialmente no segundo e terceiro trimestres, pode causar danos ao feto.',
    contrIndicacao3: 'Pacientes com histórico de angioedema hereditário ou induzido por medicamentos devem evitar o uso de Enalapril.',
    compDispersivel: '',
    geral1: 'Estas são orientações do fabricante presentes na bula aprovada pela Anvisa. Outras indicações de uso podem ser determinadas por Sociedades e Órgãos.',
    geral2: '',
    acaoProlongada: '',
    linkRemedio: 'https://consultaremedios.com.br/enalapril/bula',
    advertencia1: 'A Enalapril pode causar hipotensão (pressão arterial baixa) e insuficiência renal, especialmente em pacientes com risco elevado. Monitoramento médico é importante.',
    advertencia2: 'Informe seu médico sobre todos os medicamentos que está tomando, pois a Enalapril pode interagir com outras substâncias.',
    advertencia3: 'Gravidez e amamentação devem ser discutidas com um profissional de saúde antes do uso.',
    advertencia4: 'Pode haver risco de hipercalemia (aumento de potássio no sangue) com o uso de Enalapril. Monitore seus níveis de potássio conforme indicado pelo médico.',
    advertencia5: '',
    advertencia6: '',
    advertencia7: '',
    posologia: 'A dosagem de Enalapril varia de acordo com a condição do paciente e a resposta ao tratamento. Siga as orientações do seu médico para determinar a dosagem adequada.'
  }










];
@Component({
  selector: 'app-ver-medicacoes',
  templateUrl: './ver-medicacoes.component.html',
  styleUrls: ['./ver-medicacoes.component.scss']
})
export class VerMedicacoesComponent {

  constructor(private sharedService: SharedService, private router: Router, private medicamentoService: MedicacoesService) {

  }
  displayedColumns: string[] = ['nome', 'classeConteudo'];
  dataSource = new MatTableDataSource<MedicacoesTable>(MEDICACOES_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  back() {
    this.sharedService.redirectHomeMedico()
  }
  voltar() {
    this.sharedService.redirectHomeMedico()
  }

  verDetalhes(medicamento: MedicamentosInterface) {
    this.medicamentoService.setremedioSelecionado(medicamento)
    const nomePaciente = this.medicamentoService.getnomeRemedio()
    console.log("Testando: " + nomePaciente)
    this.sharedService.redirectRemedioSelected(medicamento);
    // Navega para a tela de detalhes e passa o ID (ou outras informações) do medicamento
  }


}
