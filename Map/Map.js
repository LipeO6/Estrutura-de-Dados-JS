// Map é uma coleção de pares (chaves-valor), onde as chaves podem ser de qualquer tipo. é um pouco parecido com array, porém, mais legível no código em formas específicas.
// Características: Ordenado por índice, qualquer tipo de chaves, podem existir valores duplicados mas não chaves duplicadas.

// Métodos:
//Adicionar elementos - set(chave, valor)
1. 
const mapa = new Map();

mapa.set('time', 'Vasco');
mapa.set('estadio', 'são januário');
console.log(mapa); // Map(2) { 'time' => 'Vasco', 'estadio' => 'são januário' }


//remover - delete(chave)
2.
mapa.delete('estadio');
console.log(mapa);// Map(1) { 'time' => 'Vasco' }


//Obter valor - get(chave)
3.
console.log('time');// 'Vasco"

//Verificar has(chave) booleano
4.
console.log(mapa.has('time')); // true

//Tamanho - size
5.
console.log(mapa.size); // 1

//Iterar
6.1// entries() - chave e valor
for (const [chave, valor] of mapa.entries()) {
    console.log(`Qual o nome do ${chave}: ${valor}`);
}

6.2// keys() - chave
for (const chave of mapa.keys()) {
    console.log(`O Vasco é o ${chave} da virada`); 
    console.log(`O Vasco é o ${chave} do amor`);
}
6.3// values() - valor
for (const valor of mapa.values()) {
    console.log(`O ${valor} é o time  da virada`); 
    console.log(`O ${valor} é o time do amor`);
}
6.4 // forEach()
mapa.set('estadio', 'são januario'); // para melhorar o forEach()
mapa.set('campeonato', 'brasileiro'); // para melhorar o forEach() 
mapa.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`);
})
