        // Funtion

// 1. básico (como usar)
{    
function saudacao(nome) { // Definindo uma função chamada "saudacao"
    console.log(`Olá, ${nome}!`);
    }
// Chamando a função passando um argumento
saudacao("João"); // Saída: Olá, João!

function soma(a, b) { // Função que retorna a soma de 2 números
    return a + b;
  }
// Chamando a função e armazenando o resultado em uma variável
const resultado = soma(3, 4);
console.log(resultado); // Saída: 7
}  

// 2. callback
{
// uma função que é passada como arg p/ outra função e é executada posteriormente , geralmente após algum evento ou ação assíncrona.

function obterDados(url, callback) {
    // Simulação de uma requisição AJAX
    setTimeout(function() { const dados = "Dados da resposta"; callback(dados); }, 2000);
  }
  
function mostrarDados(dados){
    console.log(dados);
}
  
obterDados("https://exemplo.com/api/dados", mostrarDados);


function exibirMensagem(cb) {
    console.log("Aguarde alguns segundos...");
    setTimeout(function() {
      cb();
    }, 3000);
  }
function msg() {
    console.log("Tempo");
} 
function msg2() {
    console.log("Tempo2");
} 
function msgfinal() {
    console.log("Tempo final");
}
exibirMensagem(msg2); // Saída: "Aguarde alguns segundos..." (após 3 segundos) "Tempo2"

// ou seja, usando do recurso callback, você cria uma função assincrona que sera executada só conforme o seu chamado, e dentro da função de callback você pode criar um lógica para manipular com as demais funções ou dados externos.

}


  
  