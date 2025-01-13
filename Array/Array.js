// Array, como já bastante comum nas linguagens de programção, é cuma coleção de elementos ordenadas, começando pelo índice 0 e por eles, podem ser acessados. É utilizado para armazenar lista de valores em sua maioria.
// Suas principais características são: Ordenado, permite duplicatas, elementos acessados por índices numéricos e aceitam qualquer tipo de dado, incluindo objetos e funções.

// Aqui seguimos para os exemplos de todos os métodos utilizados na estrutura de métodos em array:

1. //Adicionar elementos
const frutas = ['maça', 'banana'];
frutas.push('goiaba'); //add no final
frutas.unshift('mamão'); // add no começo
console.log(frutas);

2. //Remover elementos
const ultimaFruta = frutas.pop();// remove a ultima
const primeiraFruta = frutas.shift(); //remove a primeira
console.log(`${ultimaFruta} - ${primeiraFruta} - ${frutas}`);

