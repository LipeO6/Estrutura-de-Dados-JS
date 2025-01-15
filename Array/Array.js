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

3. //Iteração
//forEach - Para cada elemento(fruta) no array.
frutas.forEach((fruta) => console.log(fruta)); // aparecerá a sequência das frutas.
//map - usado para extrair uma parte do array e manipula-lo.
const frutasMaiuscula = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMaiuscula); // todas as frutas estarão em capslock

4. // Para buscar elementos

