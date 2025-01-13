//Aqui falaremos sobre Objeto em JS, que é uma junção de caracteristicas dentro de uma variável.
//Caracteristicas: Chaves e valores. Chaves são únicas e são as propriedades do Objeto. Valores : É o valor da chave, o que é a propriedade em si. Objetos são dinâmicos, pode adicionar, modificar ou remover propriedades. Exemplo:

1. // Literal
let pessoa = {
    nome: 'João',
    idade: 30,
    cargo: 'Diretor',
};
console.log(pessoa.cargo); //Saída: Diretor

2. // Com construtor
let carro = new Object();
carro.marca = 'Toyota';
carro.modelo = 'Corolla';
console.log(carro); // { marca: 'Toyota', modelo: 'Corolla' }

3. // Object.create
const veiculo = {tipo: 'genérico'};
const moto = Object.create(veiculo);
moto.marca = 'Nissan';
moto.cor = 'prata';
moto.modelo = 'esportiva';
console.log(moto);

4. // Métodos e Propriedades Comuns
4.1 // Add/alterar propriedades;
const produto = {};
produto.nome = "Cerveja";
produto.preco = 5.50;
console.log(produto); // { nome: 'Cerveja', preco: 5.5 }

4.2 // Remover
delete produto.preco;
console.log(produto); // { nome: 'Cerveja' }

4.3 // Iterar sobre propriedades
const usuario = { nome: 'Maria', idade: 25 };
for (let chave in usuario) {
    console.log(`${chave}: ${usuario[chave]}`);
} //

// -- Método do Objeto
1. // Object.keys(obj) - Retorna um array com as chaves do objeto.
console.log(Object.keys(usuario)); // retorno: ['nome', 'idade']

2. //Object.values(obj) - Retorna um array com os valores do objeto.
console.log(Object.values(usuario)); // retorno: ['Maria', '25']

3. //Object.entries(obj) - Retorna um ARRAY de pares com as entradas(chave e valor).
console.log(Object.entries(usuario)); // retorno: [['nome','Maria'], ['idade', 25]]

4. //Object. assign(Target, source) - Copia as propriedades de um objeto p/ outro.
const destino = { cor: 'azul'};
const origem = {tamanho: 'grande'};
const forma = {forma: 'onda'};
Object.assign(destino, origem, forma);
console.log(destino); // copia todas as propriedades e une a primeira citada.

5. //Object.freeze(obj) - congela o objeto impedindo alterações.
const config = {tema: 'claro'};
Object.freeze(config);
//Qualquer tentativa de operação que faça, não funcionará.

6. // Object.seal(obj) - Impede adição e remoção, porém é permitido alteração dos valores existentes.
const person = {nome: 'José', idade: 25};
Object.seal(person);
person.altura = 1.80;
person.idade = 27;
console.log(person); // Apenas funcionará a alteração da idade.

7. //Object.hasOwn(obj, key): Verifica se o objeto possui uma propriedade específica(sem considerar o protótipo(object.create))
console.log(Object.hasOwn(person, 'nome')); // retorno - true
console.log(Object.hasOwn(person, 'altura')) // retorno - false

