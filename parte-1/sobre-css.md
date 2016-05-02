#O que é CSS?
Cascading Style Sheets é uma folha de estilos utilizada para descrever a apresentação de um documento escrito em linguagem de marcação. 

###Para que serve isso?
CSS foi originalmente criado para permitir a separação do conteúdo de um documento dos aspectos visuais de sua apresentação. Uma mesma folha de estilos pode ser utilizada em diferentes páginas de um mesmo site, simplificando a replicação de estilos e otimizando o carregamento da página.

###Sintaxe do arquivo
É relativamente simples e usa uma série de palavras da língua inglesa para várias propriedades de estilo. A folha de estilo consiste em uma lista de regras e cada uma possui um ou mais __seletores__ e um __bloco de declaração__  
  
Os __seletores__ podem ser aplicados a:

* Tags específicas de HTML, como por exemplo `h1`
* Atributos de elementos como id, anotado por `#` antes do ID específico
* Atributos de elementos como classe, anotado por `.` antes do nome da classe
* Pseudo-classes para acessar uma informação que não está contida em um documento, utilizando `:` após o seletor. Um bom exemplo é uma ação de passar o mouse por cima de um elemento como o `h1`, que seria anotado como `h1:hover`
* Atributos personalizados do elementos, anotado entre colchetes. Um exemplo seria `[href]` para selecionar todos elementos com um hyperlink na página

Os __blocos de declaração__ são declarado entre chaves `{...}`. Cada declaração consiste em uma _propriedade_, dois pontos `:` e um _valor_. Se houverem múltiplas declarações, estas devem ser separadas por um ponto-e-vírgula `;`

#Construindo sua 1ª folha de estilos
Utilizando o HTML do exercício anterior você deve:

1. Criar um espaço de respiro da imagem em relação ao topo em 100 pixels
2. Arredondar, gerar uma borda branca e criar uma leve projeção de sombra na imagem.
3. Alterar a fonte do `h1` utilizando uma fonte que não é do sistema e mudar sua cor.
4. Centralizar todo o conteúdo.
5. Alterar a cor de fundo de todo o documento

A parte de hoje fica por aqui. Até 4ª!

_Uma parte das definições foi retirada da [Wikipedia](https://en.wikipedia.org/wiki/CSS) sob [Creative Commons Atribuição CC-BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/legalcode)_
