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

##Exercício 6 - Number
O números podem ser inteiros como `2`, `14`, ou `4353`, ou podem ser decimais como `3.14`, `1.5`, ou `100.7893423` sempre anotados com o caractere de __ponto__ e nunca de vírgula. 

##Desafio:  
No arquivo defina uma variável chamada __exemplo__ que referencia o valor `123456789`.  

Então use o `console.log()` para imprimir o resultado da variável no console do navegador.

##Exercício 7 - Arredondando números
   
Podemos fazer operações simples de matemática usando operadores como `+` (soma), `-` (subtração),  `*` (multiplicação), `/` (divisão), e `%` (resto de uma divisão).  
   
Para cálculos complexos, usamos o objeto `Math`.  

Para arredondar uma fração para seu valor inteiro mais próximo utilizamos o objeto `Math` em conjunto do método `round` separados por ponto e seguidos por parêntesis. Assim como o console.log o valor a ser inserido no método é colocado dentro dos parêntesis. Exemplo:  
`Math.round(1.6);`  
   
Para arredondar para baixo utilizamos o método `floor`:
`Math.floor(1.6);`  

Para arredondar para cima utilizamos o método `ceil`:
`Math.ceil(1.6);`  

## Desafio:  
Use o `console.log()` para imprimir uma variável decimal, seu valor arredondado para seu número mais próximo, para cima e para baixo. Você pode usar 4 `console.log()` diferentes ou declarar todos dentro de 1 só `console.log` com os diferentes valores separados por vírgula. Exemplo:
`console.log(valor1, valor2, valor3, valor4);`

##Exercício 8 - Condicional com If
   
Instruções condicionais são usadas para alterar o controle de fluxo de um programa, baseado em uma condição de __verdadeiro__ ou __falso__.  

Uma instrução condicional é mais ou menos assim:  

 ```
 if (n > 1) {
 	console.log('a variável n é maior que 1.');  
 } else { 
 	console.log('a variável n é menor ou igual a 1.');  
 }
 ```  

 O par de chaves no Javascript sempre representa uma sequência de declarações que compõe uma declaração composta. Veremos seu aparecimento em diferentes declarações do JavaScript.  

Dentro dos parênteses você deve informar uma instrução de lógica, com a idéia de que o resultado seja true ou false.  

O bloco else é opcional e contém o código que será executado caso a instrução resulte em false.  

###Desafio:  

Crie uma arquivo chamado if-statement.js.  

No arquivo criado, declare uma variável chamada `fruta`.  

Faça a variável `fruta` referenciar o valor `laranja` ou qualquer outro nome de fruta com o tipo _String_.  

Depois use o `console.log()` para imprimir `'O nome da fruta é tem 6 ou mais caracteres'` se o tamanho do valor da variável `fruta` for maior do que cinco. Caso contrário, imprima `'O nome da fruta tem menos de 6 caracteres'` no seu navegador.

##Exercício 9 - fazendo Loop com For

_Loops_ são declarações compostas que são especificadas uma única vez mas que devem ser executadas diversas vezes em sucessão. O código dentro de um _Loop_ será obedecido um número específico de vezes, ou uma vez para item de uma coleção, ou até que uma condição seja alcançada, ou indefinidas vezes.

_Loops_ realizado com a declaração `for` acontecem em um número controlado de vezes e são declarados dessa forma:  

```
for (var i = 0; i < 10; i++) {  
  // imprimir os números de 0 até 9  
  console.log(i)  
}
```
   
A variável `i` é usada para rastrear a quantidade de vezes em que o _Loop_ foi executado. A declaração `var i=0` marca que o valor inicial da variável i se inicia no valor 0

A expressão `i < 10;` indica o limite do _Loop_. O _Loop_ continuará se o valor da variável i for menor que 10.  

A expressão `i++` incrementa o valor da variável i a cada iteração [repetição do código]. É importante notar que o valor de `i` é diferente a cada repetição

## Desafio:  
No arquivo *.js que está trabalhando defina uma variável chamada `total` e inicialize ela com o valor 1.  

Defina uma segunda variável chamada `limite` e inicialize ela com o valor 10.  

Crie um _Loop_ for com a variável `i` iniciando do 0 aumentando por um 1 em cada iteração. O _Loop_ deverá correr enquanto o valor de `i` for menor que o valor de `limite`.  

Á cada repetição, adicione o número do `i` à variável `total`. Para fazer isto, você pode usar a seguinte expressão:  
```
total += i;  
```

Após o _Loop_, use o `console.log()` para imprimir a variável `total` ao console do navegador.
