// Programação Assíncrona

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




