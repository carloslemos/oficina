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
Uma _String_ é uma sequência de caracteres e é declarado por qualquer valor cercado de aspas.
Podem ser usadas as aspas simples ou aspas duplas:  

`'isto é uma string'`  
`"isto também é uma string"`  

Tente ser consistente. Nesta oficina usaremos apenas aspas simples.  

## Desafio:
No arquivo crie uma variável chamada __algumaString__ da seguinte forma:  

`var algumaString = 'isto é uma string';`  

Então use o `console.log()` para imprimir a variável example no console do navegador.

##Exercício 4 - o tamanho de uma String
   
É possível que você precise saber quantos caracteres estão em uma _String_. Para isso você usará a propriedade `.length` da _String_. Um exemplo:  

`var exemplo = 'String de exemplo';`  
`exemplo.length;`  

Tenha certeza de que existe um ponto entre a sua variável que contém uma _String_ e `length`. O código acima irá retornar um _Number_ (valor numérico) com o total de caracteres na _String_.  

## Desafio:  
Então use o `console.log()` para imprimir o tamanho da _String_ criada no __Exercício 3__ no console do navegador.

##Exercício 5 - Modificando uma String
Frequentemente você precisará mudar o conteúdo de uma _String_.  

As _Strings_ tem funcionalidades que te permitem inspecionar e manipular seus conteúdos.  

Um exemplo que usa o método `.replace()`:  

`var exemplo = 'este exemplo existe';`  
`exemplo = exemplo.replace('existe', 'é incrível');`  
`console.log(exemplo);`  

Perceba que para mudar o valor da _String_ da variável exemplo, nós precisamos usar o sinal __=__ novamente, desta vez com o método `exemplo.replace()` no lado direito dele.  

### Desafio:  

Defina uma variável chamada pizza que referencia esta _String_: `'pizza é bom'`  
Use o método `.replace()` para modificar o `bom` para `melhor coisa do mundo`.  

Então use o `console.log()` para imprimir o resultado do método `.replace()` no console do navegador.
