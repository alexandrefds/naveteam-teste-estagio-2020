# naveteam-teste-estagio-2020
Teste para estágio da Naveteam.

# Algoritmos de teste
Link para o SandBox:
https://codesandbox.io/s/teste-estagio-template-forked-g5vxt?file=/index.html

Link para o Google Driver contendo os algoritmos:
https://drive.google.com/file/d/1VxajkOysY9TkF_QocKNOlm7ZY_k6iu86/view?usp=sharing

DIFICULDADES:
Por ser a primeira vez a usar o Codesandbox, ao passar o desenvolvido pelo VS Code - rodando com NodeJS - o exercício 9 sempre retorna 'objeto', enquanto via NodeJS retorna o pedido pelo exercício.

#API

A API se encontra no diretório acima - chamado de api.

COMO RODAR A API:

Dentro da pasta database há um arquivo sql que contém o banco de dados com as tabelas necessárias. Faça a importação para o mySQL usado - caso for via phpmyadmin crie uma tabela chamada 'navers' e importe o arquivo sql.
Se por algum motivo os node_modules não estiverem inclusos na clonagem ou download da api, via terminal na pasta da api rode npm init.
Com tudo certo, rode npm start em um terminal para rodar a api.

Testes REST:
Dentro do diretório api há um arquivo chamado Insomnia_rotas.json, importe-o (no Insomina ou Postman) para aplicar testes REST.

DIFICULDADES:
Devido a tabela navers e a tabela projetos terem uma relação N pra N tentei aplciar uma tabela associativa para obter a quantidade de projetos que cada naver tinha, e a quantidade de navers que cada projeto tem. Porém, infelizmente não consegui achar uma forma de aplicar isso no NodeJS. Não consegui achar um meio de inserir mais de um projeto por vez, ou naver por vez, ou seja, um array.
