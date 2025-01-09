//Set é uma coleção de valores únicos, não permite duplicatas em sua linha.
// Características são: Não ordenada, valores únicos, qualquer tipo de dado e o pulo do gato é sua utilização, que se classifica melhor para verificar se existe algum dado na coleção. Exemplo:

let numeros = new Set([10, 15, 34, 58]);
console.log(numeros.has(34));
//true

// Os principais métodos são add(); delete(); has(); size; forEach(), operator (...). Exemplos:

numeros.add(26); // adiciona ao final;
numeros.delete(58); // faz a mverificação, caso encontre, delete;
numeros.has(5); // exemplo verificado acima - resultado - booleano;
numeros.size; // sai a quantidade de itens do set.

//Separando uma parte apenas para iteração, podendo usar o for de algumas maneiras

1
for (let numero of numeros) {
    console.log(`Número: ${numero}`)
}; // a saída será cada numero dentro da coleção.

2
numeros.forEach((numero) => {
    if (numero.toString().startsWith('1')) {
        console.log(`${numero} começa com 1`);
    }
}); //Na saída serão mostrados 10 e 15.

3
//conversão de array set para array
let arrayDeNumeros = [numeros];
console.log(arrayDeNumeros); // mostrará [ Set(4) { 10, 15, 34, 26 } ]