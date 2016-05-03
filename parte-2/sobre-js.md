Para começar vamos criar um arquivo __.js__. Para efeito de organização iremos deixar esse arquivo na mesma pasta do __html__ da parte anterior. O nome desse arquivo pode ser __aula.js__, ou qualquer outro do seu gosto. Nos exemplos a seguir sempre irei me referir a este arquivo como __aula.js__.

Dito isso vamos chamá-lo no nosso html com a seguinte tag:
`<script src="aula.js"></script>`

##Exercício 1 - Olá mundo
Para começar vamos chamar um _Olá mundo_ na linha de console com a seguinte declaração

`console.log("Olá mundo")`  

Ao abrir o arquivo em seu navegador, no console de comandos a mensagem __"Olá mundo"__ deve aparecer.

##Exercício 2 - Variáveis
Uma variável é um pedaço de armazenamento da memória pareado com um nome simbólico, chamado de _identificador_.  
Variáveis de JavaScript são declaradas usando a palavra `var` seguida do nome da variável.

Aqui está um exemplo:  

`var exemplo;`

A variável acima foi declarada, mas ainda não foi definida (ou seja, ainda não faz referência á um valor específico). Aqui está um exemplo de como definir uma variável, fazendo ela referenciar um valor específico:  

`var exemplo = 'algum valor';`

Uma variável é declarada quando usamos __var__, e o __=__ é usado para definir o valor pelo qual a variável vai fazer referência. Coloquialmente dizemos que _criamos uma variável com um valor_.

###Desafio
Faça a variável `exemplo` ter o valor igual á `'alguma string'`.  
Então use o `console.log()` para imprimir a variável example no console do navegador.

##Exercício 3 - String
Uma __string__ é uma sequência de caracteres e é declarado por qualquer valor cercado de aspas.
Podem ser usadas as aspas simples ou aspas duplas:  

`'isto é uma string'`  
`"isto também é uma string"`  

Tente ser consistente. Neste workshop usaremos apenas aspas simples.  

## Desafio:
No arquivo crie uma variável chamada __algumaString__ da seguinte forma:  

`var algumaString = 'isto é uma string';`  

Então use o `console.log()` para imprimir a variável example no console do navegador.
