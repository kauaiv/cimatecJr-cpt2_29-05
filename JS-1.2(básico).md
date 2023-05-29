# <center>Javascript</center>


#### Array
| Pergunta | Resposta |
|-------|-------|
| O que é um array? | Estrutura de dados no JS que armazena uma coleção ordenada de elementos. Esses elementos podem ser de qualquer tipo, como números, strings ou objetos. |
| Para que serve? | São usados p/ armazenar e acessar vários valores em uma única variável. Úteis em lista de itens relacionados ou conjuntos de dados. |
| Onde uso? | Os arrays são amplamente usados para manipular e gerenciar coleções de dados, como listas de usuários, registros de um banco de dados ou elementos de uma lista de tarefas. |
| Como uso? | Para criar um array, você pode usar a sintaxe de colchetes ([]) e separar os elementos por vírgulas. Você pode acessar os elementos de um array usando seu índice, que começa em 0. |
| Por que uso? | Os arrays oferecem uma maneira eficiente de armazenar e organizar dados relacionados. Eles permitem acesso rápido aos elementos e fornecem uma variedade de métodos para manipular e percorrer os dados. |

1. Map
	* O que é?
		* Método de array que cria um novo array transformando cada elemento através de uma função.
	* Na prática:
		* Usado para modificar os valores de um array e criar um novo array com as transformações aplicadas.
2. Destructing
	* O que é?
		* Sintaxe para extrair valores de arrays ou objetos em variáveis individuais.
	* Na prática:
		* Permite acessar facilmente elementos de um array ou propriedades de um objeto em variáveis separadas.
3. forEach
	* O que é?
		* Método de array que executa uma função para cada elemento do array.
	* Na prática:
		* Útil para realizar uma operação em cada elemento do array, como exibição de valores ou execução de ações personalizadas.
4. Filter
	* O que é?
		* Método de array que cria um novo array com elementos que atendem a uma condição especificada.
	* Na prática:
		* Usado para filtrar elementos de um array com base em uma condição, criando um novo array com os elementos desejados.
--- 
### Funções
| Pergunta | Resposta |
|-------|-------|
| O que são funções? | Uma função é um bloco de código JS projetado para executar uma tarefa específica. Ela pode receber argumentos como entrada, executar um conjunto de instruções e retornar um valor opcional. |
| Para que serve? | São usadas para dividir o código em partes menores e reutilizáveis, permitindo que você organize, modularize e abstraia a lógica do programa. Elas promovem a reutilização e a manutenção do código. |
| Onde uso? | As funções são usadas em quase todos os aspectos do desenvolvimento de software, desde a execução de cálculos complexos até a manipulação de eventos, interações com o usuário, chamadas de API e muito mais. |
| Como uso? | Para criar uma função, você pode usar a palavra-chave function, seguida pelo nome da função, parênteses para os argumentos e chaves para envolver o bloco de código. Você pode chamá-la posteriormente usando seu nome seguido por parênteses. |
| Por que uso? | O uso de funções ajuda a melhorar a legibilidade, modularidade e reutilização do código. Elas permitem que você quebre o código em partes menores e lógicas, facilitando a manutenção e o desenvolvimento de programas mais escaláveis e organizados. |

1. Criação de função
	* O que é?
		* É o processo de definir e escrever uma função em um programa.
	* Na prática:
		* Você pode criar funções para executar tarefas específicas, como cálculos matemáticos, manipulação de dados ou interações com o usuário.
2. Callback
	* O que é?
		* É uma função que é passada como argumento para outra função e será chamada de volta em algum momento específico.
	* Na prática:
		* Os callbacks são comumente usados em programação assíncrona para lidar com eventos, chamadas de API ou operações demoradas. Eles permitem que você especifique ações a serem executadas quando uma determinada operação for concluída ou quando um evento ocorrer.
--- 
### Objetos/Classe
| Pergunta | Resposta |
|-------|-------|
| O que é um objeto/classe? | Um objeto é uma instância única que contém propriedades e métodos. Uma classe é uma estrutura que descreve a definição de um objeto, atuando como um modelo para criar objetos. |
| Para que serve? | Objetos são usados para representar entidades e organizar dados relacionados em propriedades e comportamentos. Classes são usadas para definir a estrutura e o comportamento de objetos semelhantes, promovendo reutilização e organização do código. |
| Onde uso? | Objetos são amplamente usados em JS para representar conceitos do mundo real, como pessoas, carros, produtos, entre outros. Classes são usadas para criar objetos com base em uma estrutura compartilhada em várias partes do código. |
| Como uso? | Para criar um objeto, você pode usar a notação de objeto '{}' e definir propriedades e métodos dentro dele. Para criar uma classe, você usa a palavra-chave 'class' e define as propriedades e métodos dentro dela. Os objetos são criados a partir da classe usando a palavra-chave 	new'. |
| Por que uso? | O uso de objetos permite organizar e encapsular dados relacionados e seus comportamentos em uma única entidade. Classes permitem definir a estrutura e o comportamento compartilhados por objetos semelhantes, promovendo reutilização, organização e manutenção do código. |

1. Destructing
	* O que é?
		* A desestruturação é uma funcionalidade do JavaScript que permite extrair valores de arrays ou objetos de forma mais concisa, atribuindo-os a variáveis individuais.
	* Na prática:
		* Acessar elementos de um array de forma direta e intuitiva.
		* Extrair propriedades de um objeto para utilizá-las separadamente.
		* Passar argumentos para funções de forma mais clara e sucinta.
		* Renomear variáveis durante a extração, facilitando a compreensão do código.
		* Ignorar elementos ou propriedades não desejados durante a extração.



---
### Programação assíncrona
| Pergunta | Resposta |
|-------|-------|
| O que é programação assíncrona? | A programação assíncrona é um modelo de programação em que as tarefas são executadas de forma não sequencial, permitindo que o programa execute múltiplas operações simultaneamente, sem bloquear a execução. |
| Para que serve? | A programação assíncrona é usada para lidar com tarefas que podem demorar, como operações de leitura/gravação em disco, chamadas de API, eventos de rede, entre outros. |
| Onde uso? | É amplamente utilizada em desenvolvimento de aplicativos web, servidores, aplicativos móveis e qualquer situação em que seja necessário lidar com operações que possam ser demoradas ou bloqueantes. |
| Como uso? | Em JS, a programação assíncrona é implementada usando callbacks, promessas, async/await ou bibliotecas/frameworks assíncronos. As operações assíncronas são definidas e tratadas de forma a não bloquear a execução do programa, permitindo que outras tarefas sejam realizadas enquanto aguardam o resultado. |
| Por que uso? | A programação assíncrona é usada para melhorar o desempenho e a capacidade de resposta de um programa. Ela evita bloqueios e permite que o programa seja mais eficiente ao lidar com operações que consomem tempo, mantendo a responsividade para o usuário ou outras partes do sistema. |

1. Async/await
	* O que é?
		* O Async/await é uma forma de lidar com programação assíncrona em JavaScript de maneira mais síncrona e fácil de ler. Ele é baseado no uso de Promises e fornece uma sintaxe mais simplificada para lidar com operações assíncronas.
	* Na prática:
		* O Async/await permite que você escreva código assíncrono de forma mais semelhante ao código síncrono, usando as palavras-chave "async" e "await". Com o Async/await, você pode aguardar a conclusão de uma operação assíncrona antes de prosseguir para a próxima linha de código, facilitando a escrita e a leitura do código assíncrono.
2. Promises
	* O que é?
		* Promises são objetos em JavaScript que representam o resultado eventual (sucesso ou falha) de uma operação assíncrona. Elas são usadas para lidar com computações assíncronas e oferecem uma alternativa mais estruturada para callbacks.
	* Na prática:
		* As Promises permitem que você escreva código assíncrono de forma mais organizada e controlada. Você pode criar uma Promise para uma operação assíncrona e definir como lidar com o resultado quando estiver disponível, seja com sucesso ou falha. Isso torna mais fácil encadear operações assíncronas, lidar com erros e controlar o fluxo de execução do código assíncrono.
3. Fetch API
	* O que é?
		* A Fetch API é uma interface em JavaScript que fornece uma maneira simples e moderna de fazer requisições HTTP assíncronas. Ela substituiu o antigo XMLHttpRequest como uma forma mais eficiente e flexível de interagir com recursos em uma rede.
	* Na prática:
		* Com a Fetch API, você pode enviar solicitações HTTP para servidores e receber as respostas correspondentes. Ela oferece métodos para enviar solicitações GET, POST, PUT, DELETE e outras, além de permitir o envio e recebimento de dados no formato JSON, FormData e outros formatos. A Fetch API é amplamente utilizada em aplicativos da web para interagir com APIs, buscar dados de servidores e atualizar conteúdos de forma dinâmica.

