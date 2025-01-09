//Aqui falaremos sobre Objeto em JS, que é uma junção de caracteristicas dentro de uma variável.
//Caracteristicas: Chaves e valores. Chaves são únicas e são as propriedades do Objeto. Valores : É o valor da chave, o que é a propriedade em si. Objetos são dinâmicos, pode adicionar, modificar ou remover propriedades. Exemplo:

1. //Literal
let pessoa = {
    nome: 'João',
    idade: 30,
    cargo: 'Diretor',
};
console.log(pessoa.cargo); //Saída: Diretor

2. //Com construtor
let carro = new Object();
carro.marca = 'Toyota';
carro.modelo = 'Corolla';
console.log(carro); // { marca: 'Toyota', modelo: 'Corolla' }

3. //Object.create
const veiculo = {tipo: 'genérico'};
const moto = Object.create(veiculo);
moto.marca = 'Nissan';
moto.cor = 'prata';
moto.modelo = 'esportiva';
console.log(moto);
