//Set é uma coleção de valores únicos, não permite duplicatas em sua linha.
// Características são: Não ordenada, valores únicos, qualquer tipo de dado e o pulo do gato é que ele é sua utilização, que se classifica melhor para verificar se existe algum dado na coleção. Exemplo:

let numeros = new Set([10, 15, 34, 58]);
console.log(numeros.has(34));
//true