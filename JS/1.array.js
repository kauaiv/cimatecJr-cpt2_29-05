    // Array

// 1. map
{
// sintaxe: const newArray = arrayOriginal.map(callback);
// const = Em JavaScript, a palavra-chave const é usada para declarar uma constante, ou seja, uma variável que não pode ter seu valor reatribuído após a sua inicialização. Ela pode ser usada com qualquer tipo de dado, seja um número, string, objeto ou array.
// O método map é aplicado ao array numbers. O map é uma função de array em JavaScript que itera sobre cada elemento do array original e retorna um novo array com os resultados das operações realizadas em cada elemento.

const numbers = [1, 2, 3, 4, 5]; // declarnado array

// Utilização do método "map" no array "numbers"
// O método "map" itera sobre cada elemento do array e retorna um novo array com os resultados da operação definida na função de callback
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

// Imprime o array "doubledNumbers" no console
console.log(doubledNumbers); // Saída: [2, 4, 6, 8, 10]
}

// 2. Destructing 
{
// sintaxe: const [variavel1, variavel2, ...] = array;
// permite extrair valores de arrays ou objetos em variáveis individuais de forma mais conveniente. Evitando a necessidade de acessá-los diretamente pelo índice ou nome de propriedade.

// Exemplo de array
const numbers = [1, 2, 3, 4, 5];

// Acessando elementos do array diretamente
// console.log(numbers[0]); // Saída: 1
// console.log(numbers[2]); // Saída: 3

// Exemplo de destructuring
const [first, second, third] = numbers;

console.log(first); // Saída: 1
console.log(second); // Saída: 2
console.log(third); // Saída: 3
}

// 3. forEach
{
// array.forEach((elemento, índice, array) => { // lógica a ser executada para cada elemento});
// O método forEach é útil quando você precisa executar uma operação em cada elemento de um array, como realizar cálculos, atualizar valores, imprimir informações, etc. Não retorna um novo array. Ele é usado principalmente para executar uma ação em cada elemento do array, sem modificar o array original.

const x = [1,2,3,4,5];
let sum=0;
x.forEach((y) => {
  sum+= y;
});
console.log(sum); // Saída: 15

}

// 4. Filter 
{
// const novoArray = array.filter((elemento) => { // Condição de filtro  return condição; }); 
// O método filter é uma função de array que permite criar um novo array contendo apenas os elementos que atendem a determinada condição.

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // Saída: [2, 4]

}
