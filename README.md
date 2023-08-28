# TesteDashboardBasico

Projeto desenvolvido em angular 16.2.0 e com NG-ZORRO na versao 16.0.1

Projeto basico, contendo header, e um painel lateral com duas opções, listagem e dashboard.

Dashboard: 
 - Apresenta 4 relarios:
    - Lista de anos com mais ganhadores: Lista os estudios com mais vitorias
    - Lista dos top 3 ganhadores: Lista os top 3 ganhadores
    - Produtores com maior e menor intervalo entre vitórias: Exibe duas tabelas exibindo informação do estudio com maior e menor intervalo de vitorias
    - Lista de anos com mais ganhadores: Tabela exibindo anos com mais ganhores, sendo possivel informar o ano.

Listagem:
 - Apresenta 1 relatorio:
    - Listagem de filmes, o mesmo é excutado com paginação, possuindo filtro por ano e por vencedor. 

Projeto apresenta testes basicos unitarios

O mesmo possui uma dimensão minima 768x1280

# Instalando e atualizando informações

Após efetuar clone do projeto, abrir console e executar `npm i`, para baixar node_modules e demais dependencias.

# Subindo ambiente

Após terminar etapa acima, executar `ng s` para subir aplicação, a mesma ira suber no endereço: `http://localhost:4200/`.

# Subir testes

Executar `ng test` o mesmo ira abrir a tela do jasmine com as infos.

# Evoluções futuras
- Adicionar eslint ao projeto
- Melhorar estrutura e criar diretorio de `core` para manter os componets principais e criar o `shared` para conter components que serão reaproveitados em outros lugares
- Criar `StringConstants` parar centralizar criação de mensagem, labels e etc.
- Verificar adição de extensões que facilitem o desenvolvimento
