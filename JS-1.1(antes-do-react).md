# Javascript (antes do react)


### <center>Babel
* Compilador específico para JS;
* O ECMAScript é uma linguagem de prog. baseada em script. pafronizada pela ECMA, contudo nem sempre essas atualizações são captádas pelos browsers;
* Assim, o babel tem esse papel para conseguir acompanhar essas atualizações, independentemente dos broswers;
* Ele vai conseguir fazer com que um código JS, não suportado em todos os navegadores passe a ser;
* NECESSÁRIO: SIM, ainda precisamos de uma ferramenta que converta as diferentes tipos de função dentro do nosso código, para que o código seja compilado. Pórem, não precisa ser necessáriamente o babel.
---
### <center>WebPack
* Faz o processo de bundle, pega vários arquivos fontes da nossa navegação e converter(agrupando) eles um único arquivo que contém vários arquivos dentro de suas especificações (.js+.hbs=js; .cjs+.sass=css ...);
* POR QUÊ: antes que o código vá ler nosso código, ele converte para que não ocorram problemas ou shocks entre os diferentes .js ou diferentes .css (e etc);
* NECESSÁRIO: em alguns caso NÃO, hoje em dia, a maioria dos browsers é capaz de compreender o que forá dito.
---

### <center>VITE
* Ferramenta que traz o ESbuild, para a gente fazer a escrita do nosso código + alterar o código e ver as alterações em tempo real + suporte a TypeScript, JSX, CSS; 
---
### <center>Sintacse JS
1. Nullish Coalescing Operator [exemplo: em um código, o 0 por de ser decladarado como false; o que pode atrapalhar na compilação ou intereção entre usuário e maquina, já que ao usar o operador ou (barra reta), o valor 0 pode ser interpretado como como false (0, '', [], false, underfined, null). Assim o nullish(??) fará a mesma coisa do operador OU (barra reta) só que leva em conta esse valores e só exclui o undefined ou null;

2. OBJETO: estrutura de dados onde é possível armazenar conjuntos de chave e valor (objeto **user**, exemplo)
	* Metódos de objetos: 
	in = [document.body.innerText = ('name' in user)] = existe 'name' dentro de objeto 
	Object.keys() = [document.body.innerText = Object.keys(user)] + retorna todas as chaves dentro do objeto
	Object.values() = [document.body.innerText = Object.value(user)] + retorna todas os valores dentro do objeto

3. DESTRUTURAÇÃO: remover parte do objeto para uma váriavel a parte
	*REST OPERATOR: dentro dessa manipulação da **desestruturação** é possível usando o ...rest retornar todas as propiedades do objeto com excesão do que vier antes do ...resto, assim sendo ele inválida uma própriedade e retorna apenas as demais em uma variável a parte

4. SHORT SYNTAX: declara variável e no objeto puxar variável condizente ao nome, já antes impresso, caso existente já. Nome da propriedade igual o nome da variável 

5. OPTIONAL CHAINING: quando preciso lidar com possíveis valores que podem vir até a não existir eu uso o O.C.; 
---
### <center>Métodos de Array
* map, filter, every, some, find, findIndex, reduce
---
### <center>Promises 
* promessas de que algo vá acontecer ou vá da errado, ou seja. Enquanto parta do código não está rodando, pela sua demora, outra irá rodar em paralelo. 
* .them / .catch 



