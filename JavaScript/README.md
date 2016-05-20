#O que é JavaScript
É uma linguagem de programação de alto-nível, dinâmica e interpretada. É usada essencialmente na manipulação do __DOM__ [a interação do código da página com o navegador].

#Aprendendo a programar JS
Para começar vamos criar um arquivo __.js__. Para efeito de organização iremos deixar esse arquivo na mesma pasta do __html__ da parte anterior. O nome desse arquivo pode ser __aula.js__, ou qualquer outro do seu gosto. Nos exemplos a seguir sempre irei me referir a este arquivo como __aula.js__.

Dito isso vamos chamá-lo no nosso html com a seguinte tag:

```html
<script src="aula.js"></script>
```

##Exercício 1 - Olá mundo
Para começar vamos chamar um _Olá mundo_ na linha de console com a seguinte declaração

```javascript
console.log("Olá mundo")
```  

Ao abrir o arquivo em seu navegador, no console de comandos a mensagem __"Olá mundo"__ deve aparecer.

##Exercício 2 - Variáveis
Uma variável é um pedaço de armazenamento da memória pareado com um nome simbólico, chamado de _identificador_.  
Variáveis de JavaScript são declaradas usando a palavra `var` seguida do nome da variável.

Aqui está um exemplo:  

```javascript
var exemplo;
```

A variável acima foi declarada, mas ainda não foi definida (ou seja, ainda não faz referência á um valor específico). Aqui está um exemplo de como definir uma variável, fazendo ela referenciar um valor específico:  

```javascript
var exemplo = 'algum valor';
```

Uma variável é declarada quando usamos __var__, e o __=__ é usado para definir o valor pelo qual a variável vai fazer referência. Coloquialmente dizemos que _criamos uma variável com um valor_.

###Desafio
Faça a variável `exemplo` ter o valor igual á `'alguma string'`.  
Então use o `console.log()` para imprimir a variável example no console do navegador.

##Exercício 3 - String
Uma _String_ é uma sequência de caracteres e é declarado por qualquer valor cercado de aspas.
Podem ser usadas as aspas simples ou aspas duplas:  

```javascript
'isto é uma string'  
"isto também é uma string" 
``` 

Tente ser consistente. Nesta oficina usaremos apenas aspas simples.  

## Desafio:
No arquivo crie uma variável chamada __algumaString__ da seguinte forma:  

```javascript
var algumaString = 'isto é uma string';
```  

Então use o `console.log()` para imprimir a variável example no console do navegador.

##Exercício 4 - o tamanho de uma String
   
É possível que você precise saber quantos caracteres estão em uma _String_. Para isso você usará a propriedade `.length` da _String_. Um exemplo:  

```javascript
var exemplo = 'String de exemplo';  
exemplo.length;
```  

Tenha certeza de que existe um ponto entre a sua variável que contém uma _String_ e `length`. O código acima irá retornar um _Number_ (valor numérico) com o total de caracteres na _String_.  

## Desafio:  
Então use o `console.log()` para imprimir o tamanho da _String_ criada no __Exercício 3__ no console do navegador.

##Exercício 5 - Modificando uma String
Frequentemente você precisará mudar o conteúdo de uma _String_.  

As _Strings_ tem funcionalidades que te permitem inspecionar e manipular seus conteúdos.  

Um exemplo que usa o método `.replace()`:  

```javascript
var exemplo = 'este exemplo existe';`  
exemplo = exemplo.replace('existe', 'é incrível');  
console.log(exemplo);
```  

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

```javascript
Math.round(1.6);
```  
   
Para arredondar para baixo utilizamos o método `floor`:
```javascript
Math.floor(1.6);
```  

Para arredondar para cima utilizamos o método `ceil`:
```javascript
Math.ceil(1.6);
```  

## Desafio:  
Use o `console.log()` para imprimir uma variável decimal, seu valor arredondado para seu número mais próximo, para cima e para baixo. Você pode usar 4 `console.log()` diferentes ou declarar todos dentro de 1 só `console.log` com os diferentes valores separados por vírgula. Exemplo:
`console.log(valor1, valor2, valor3, valor4);`

##Exercício 8 - Condicional com If
   
Instruções condicionais são usadas para alterar o controle de fluxo de um programa, baseado em uma condição de __verdadeiro__ ou __falso__.  

Uma instrução condicional é mais ou menos assim:  

```javascript
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

No arquivo .js criado declare uma variável chamada `fruta`.  

Faça a variável `fruta` referenciar o valor `laranja` ou qualquer outro nome de fruta com o tipo _String_.  

Depois use o `console.log()` para imprimir `'O nome da fruta é tem 6 ou mais caracteres'` se o tamanho do valor da variável `fruta` for maior do que cinco. Caso contrário, imprima `'O nome da fruta tem menos de 6 caracteres'` no seu navegador.

##Exercício 9 - fazendo Loop com For

_Loops_ são declarações compostas que são especificadas uma única vez mas que devem ser executadas diversas vezes em sucessão. O código dentro de um _Loop_ será obedecido um número específico de vezes, ou uma vez para item de uma coleção, ou até que uma condição seja alcançada, ou indefinidas vezes.

_Loops_ realizado com a declaração `for` acontecem em um número controlado de vezes e são declarados dessa forma:  

```javascript
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
```javascript
total += i;  
```

Após o _Loop_, use o `console.log()` para imprimir a variável `total` no console do navegador.

##Exercício 10 - Arrays  
   
Uma _Array_ é uma coleção de elementos (valores ou variáveis). Aqui está um exemplo:  

```javascript
var pets = ['gato', 'cachorro', 'rato'];
```  

Cada um dos elementos é identificado por um índice ou uma chave.

### Desafio:  
No arquivo criado defina uma variável chamada `frutas` que referencia  
um _Array_ com três Strings contendo nomes de frutas.  

Use o `console.log()` para imprimir a _Array_ `frutas` no console do navegador.

##Exercício 11 - Filtrando Arrays  

Existem muitas formas de manipular _Arrays_. Uma tarefa comum é filtrar uma _Array_ para que ela contenha somente alguns valores. Para isso podemos usar o método `.filter()`. Um exemplo:  

```javascript
var pets = ['gato', 'cão', 'elefante'];  

var filtrada = pets.filter(function (pet) {  
	return (pet !== 'elefante');  
});
```  

A variável `filtrada` irá conter apenas `'gato'` e `'cão'`.  

###Desafio:  
Neste arquivo, defina uma variável chamada `numeros` que referencia esta _Array_:  

```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```  

Como acima, defina uma variavel chamada `filtrada` com referência ao  
resultado de `numeros.filter()`.  

A função que você passa para o método .filter() será igual essa:  

```javascript
function numerosPares (numero) {  
	return numero % 2 === 0;  
}
```

Use o `console.log()` para imprimir a _Array_ `filtrada`

##Exercício 12 - Acessando valores de Arrays  

Podemos acessar elementos de uma _Array_ através de um número que representa sua posição, conhecido como índice. O valor do índice inicia com 0 e vai até o valor que representa o tamanho do _Array_ menos 1.  

Aqui está um exemplo:  

```javascript
var pets = ['gato', 'cão', 'rato'];  
console.log(pets[0]);  
```

O código acima imprime o primeiro elemento do _Array_ pets - uma _String_ `'gato'`.  

Os elementos do _Array_ devem ser acessados através do uso do valor do índice entre colchetes `[...]`. Utilizar ponto para acessar o elemento não é válido.  

Uso válido:  
```javascript
console.log(pets[0]);`  
```

Uso __inválido__:  
```javascript
console.log(pets.1);
```    

###Desafio:  
Use o `console.log()` para imprimir o segundo valor do _Array_ `frutas`

##Exercício 13 - Varrendo Arrays com Loop

É possível descobrir um tamanho de uma _Array_ com o método `length` da mesma maneira que usamos para descobrir o tamanho de uma _String_. Para este desafio usaremos um _Loop_ for para acessar e manipular uma lista de valores em uma _Array_.  

Dentro de um loop `for` podemos utilizar a variável `i` dentro dos colchetes ao invés de usar diretamente um inteiro, pois a variável `i` do _Loop_ se refere a um número inteiro.  

```javascript
for (var i=0; i<pets.length; i++){
	console.log(pets[i]+'s');
}
```

Na operação acima estaríamos adicionando a letra __s__ a _String_ com o nome do bicho de estimação a cada _Loop_ no console. 


###Desafio:  
Crie um _Loop_ `for` que altera cada _String_ na _Array_ `frutas` para o plural.  

Você usará uma instrução como esta dentro do loop:  
```javascript
pets[i] = pets[i] + 's';  
```

Depois do loop, use o `console.log()` para imprimir a _Array_ 

##Exercício 14 - Objetos

_Objetos_  em JavaScript são listas de valores similares às _Arrays_, exceto que seus valores são identificados por chaves ao invés de números inteiros.  
   
Aqui está um exemplo:  

```javascript
var pizza = {  
  sabor: 'mozzarella',  
  pedacos: 8  
}
```
   
###Desafio:  
   
Defina uma variável chamada `quitanda` desta forma:  
 
```javascript  
var quitanda = {  
  frutas: ['laranja', 'maçã', 'banana'],  
  funcionamento: 'entre 8h e 18h',  
  funcionarios: 4  
}
```

Use o `console.log()` para imprimir o objeto `quitanda` no terminal. 

##Exercício 15 - Manipulando Objetos

Você pode acessar e manipular propriedades de _Objetos_ –– as chaves e valores de um objeto –– de uma maneira bem similar como fazemos com _Arrays_.   
   
Aqui está um exemplo:  

```javascript
var pizza = {  
  sabor: 'mozzarella',  
  pedacos: 8  
}

console.log(pizza['sabor']);
```

O código acima vai imprimir no console a _String_ `'mozzarella'`. Como alternativa você pode utilizar ponto para obter o mesmo resultado:  
```javascript
console.log(pizza['sabor']);
console.log(pizza.sabor);
```

Ambas as linhas retornarão a _String_ `'mozzarella'`.

###Desafio:  
Use o `console.log()` para imprimir a propriedadde `funcionarios` do objeto `quitanda` no terminal.

Defina uma variável chamada `quitanda` desta forma:  
 
```javascript  
var quitanda = {  
  frutas: ['laranja', 'maçã', 'banana'],  
  funcionamento: 'entre 8h e 18h',  
  funcionarios: 4  
}
```

Use o `console.log()` para imprimir o objeto `quitanda` no terminal.

##Exercício 16 - Funções
Uma _Função_ é um bloco com uma lista de parâmetros (que podem ser vazios) a qual normalmente se dá um nome. Uma função pode utilizar variáveis locais. Se você não criar uma declaração `return` ao final de uma função o valor `undefined` será retornado ao término da função (e isso não é um problema). Um exemplo:

```javascript
function exemplo(x) {  
  return x * 2;  
}

console.log(exemplo(5));
```

No exemplo acima a função espera receber argumento/parâmetro de entrada _Number_ que será alocado em uma variável local `x` e que será multiplicado por 2 no valor de retorno/saída da função. 

###Desafio:  
Defina uma função chamada `compra` que receberá um argumento do tipo _String_ chamado `fruta`.  

De dentro da função retorne o argumento `fruta` dessa maneira:  

```javascript
return 'Um cliente acaba de efetuar a compra de ' + fruta;  
```

Dentro do parênteses do `console.log()`, chame a função `compra()` com `'bananas'` como argumento. 

##Exercício 17 - Argumentos de Funções
É possível fornecer mais de um argumento para uma  _Função_. Além disso argumentos podem ser possuir qualquer valor, seja ele uma _String_, um _Number_, uma _Array_, um _Objeto_ ou até mesmo uma outra _Função_. Um exemplo:

```javascript
function velocidade(distancia, tempo) {
  return Math.round(distancia/tempo);  
}

console.log('A velocidade de Usain Bolt na última olimpíada é de aproximadamente ' + velocidade(100, 9.58) + ' metros por segundo');  

```

###Desafio:
Crie uma função `troca` com 2 argumentos. A função deve retornar `'O cliente quer trocar ' + argumento1 + 'por' + argumento2`;
 
Dentro do parênteses do `console.log()`, chame a função `troca()` com `'alho'` e `'bugalho'` como argumentos. 

_Uma parte das definições foi retirada da [Wikipedia](https://en.wikipedia.org/wiki/CSS) sob [Creative Commons Atribuição CC-BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/legalcode)_. Os exercícios são modificações do curso da [NODESCHOOL](http://nodeschool.io/#workshoppers) sobre JavaScript