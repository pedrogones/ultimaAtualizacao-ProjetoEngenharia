# ultimaAtualizacao-ProjetoEngenharia

Partindo do ponto que ja temos o Maven e o Angular instalados

No seu gerenciador de Arquivos:
crie uma pasta chamada ProjetoEngenharia, após, abra-o na tua IDE
abra no powerShell como adm(ou tu logo concede permissão para criar/editar as pastas no teu doretório, pq vai ficar dando erro de permissão quando for criar projetos angular) entre no caminho da sua pasta ProjetoEngenharia
para conceder a permissaão use:
icacls "C:\Users\pedro\ProjetoEngenharia" /grant "pedro:(OI)(CI)F"

no meu caso, meu usuario é pedro, ces usam o de vocês
execute o comando:
ng new angularClinical

aperte Y
selecione o style scss

ai tu entra no arquivo q criuou agora:
cd angularClinical

executa e aceita oq tiver de aceitar:
npm install -g @angular/cli

após:
ng add @angular/material
 
após:
npm install primeicons primeng --save
ou esse, se o de cima deu errado:
npm install primeicons primeng --save --force

se tu executar o seguinte código, vai abrir uma home do angular:

npm install --save @angular/material @angular/cdk


ng serve

abra na porta localhost:4200, e se deu certo, abriu a home do angular

aí agora, tu vai baixar o arquivo do git, e pegar o src e substituir o do projeto angularClinical, que tu acabou de criar, pelo src do que está no Git
n~]ao esqueca de pegar o proxy.conf.js e colocar lá junto das outras pastas (as .app, .spec, os package e etc) ele fica solto mesmo

