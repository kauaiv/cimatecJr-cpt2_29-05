// programação assincrona

// Async/await/promisses 
{
function delay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolvido com atraso");
        }, 2000);
    });
}

async function main(){
    console.log("antes de iniciar... ");

    const resultado = await delay();

    // setTimeout(() => {
    //     console.log("OIIIIIII");
    // }, 5000);


    console.log("após espera");
    console.log("Resultado:", resultado)
}

main();
}

// fetch api
{
async function fetchUserData() {
    try {
      const response = await fetch('https://api.examplesnosnos,sionsAP.com/user'); // Faz a requisição para a API
      const userData = await response.json(); // Converte a resposta para formato JSON
      console.log(userData); // Exibe os dados do usuário no console
    } catch (error) {
      console.log('Ocorreu um erro:', error); // Trata erros, se houver algum
    }
  }
  
  fetchUserData();
} 


