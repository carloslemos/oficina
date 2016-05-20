#O que é HTML?
É uma abreviação para HyperText Markup Language. É o formato padrão de linguagem de marcação para a criação de páginas da web. Forma um dos pilares da tecnologia para web junto ao __CSS__ e __JavaScript__

### Então que é uma linguagem de marcação?
É um sistema de anotação de documentos de uma maneira que seja sintaticamente distinto do texto. Esse arquivo aqui que estou apresentando para vocês é um outro formato de linguagem de marcação chamado de Markdown. Não é importante saber isso, mas sabem como é...

### Como funciona?
Navegadores de internet e podem gerar [renderizar] páginas visuais ou mesmo áudios [dependendo das configurações de acessibilidade] a partir da leitura dos HTMLs.

### Elementos do HTML
São os blocos de construção das páginas. Permitem criação de documentos estruturados ao indicar estruturas semânticas para o texto como cabeçalhos, paragrafos, listas, links, citações, etc. Isso é feito por meio de _tags_ escritas entre os símbolos __<__ e __>__. Algumas tags como `<img>` ou `<input>` inserem conteúdo diretamente a página e outras como `<p>...</p>` fornecem informação de como este documento deve se comportar. Blocos de construção podem ser aninhados dentro de outros blocos.

Existem 4 elementos essenciais para a construção de uma página web
* `<!DOCTYPE html>`  
Declaração que define que esse documento é um HTML. Se tem isso você garante que seu arquivo é um HTML5
*`<html>...<\html>`  
Todo o conteúdo do HTML fica entre essas duas tags
* `<head>...<\head>`  
Fornece informação sobre o documento que não aparece na página. Deem uma conferida na página do servidor
* `<body>...<\body>`  
O corpo da página. O conteúdo aqui inserido será visualizado no navegador

Existem outros elementos comuns em boa parte dos htmls como __title, h1, img, p, a__, etc. E todo bloco pode possuir atributos específicos como __class, id, src, href__. Porque e como usamos cada um veremos logo a seguir.

#Construindo o seu 1º HTML

Criar uma página que contenha:

1. uma foto sua na internet
2. seu nome como título
3. um pequeno parágrafo sobre você. [Pode ser texto de marcação](http://www.lipsum.com/feed/html)
4. um link para sua conta pessoal de twitter, linkedin ou snapchat

Não se preocupe com a estilização dos elementos. Nós veremos isso a [seguir](https://github.com/carloslemos/oficina/tree/master/CSS).

_Uma parte das definições foi retirada da [Wikipedia](https://en.wikipedia.org/wiki/HTML) sob [Creative Commons Atribuição CC-BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/legalcode)_
