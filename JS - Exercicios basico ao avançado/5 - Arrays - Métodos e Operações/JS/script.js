// Exercício 87 => Dado dois arrays, um com vários números pares e outro com números ímpares, combine-os e, em seguida, filtre apenas os números que são múltiplos de 5
const ex87Par = [2, 4, 10, 12, 20];
const ex87impar = [1, 3, 5, 15, 25];

function ex87(arrayOne, arrayTwo) {
  return arrayOne.concat(arrayTwo).filter((x) => x % 5 === 0);
}
console.log(ex87(ex87Par, ex87impar));

// Exercício 88 => Dado um array de preços de produtos, calcule o preço total após adicionar 10% de imposto a cada produto, e depois some todos os preços
const ex88 = [10, 20, 30, 40, 50];

function tributeEx88(array) {
  return array.map((price) => price * 1.1).reduce((acc, curr) => acc + curr, 0);
}
console.log(tributeEx88(ex88));

// Exercício 89 => Dada um string com várias palavras separadas por espaços(frase), transforme-a em um array e retorne a palavra mais longa
const ex89 = `Olá meu nome é João Bertholino, e o seu?`;

function wordLength(string) {
  return string.split(' ').reduce((acc, curr) => (curr.length > acc.length ? curr : acc), '');
}
console.log(wordLength(ex89));

// Exercício 90 => Dado um array que contém vários elementos duplicados, crie uma função que remova todas as duplicatas e retorne um array com elementos únicos.
const ex90 = [10, 10, 20, 30, 30, 40, 50, 50];

function removeDuplicate(array) {
  return [...new Set(array)]; // Set() => Objeto que permite armazenar ou filtrar valores únicos
}
console.log(removeDuplicate(ex90));

// Exercício 91 => Dado um array de strings, ordene-o em ordem decrescente com base no comprimento de cada string
const ex91 = [`João`, `Ellen`, `Nicolas`, `Adriano`, `Lucas`];

function nameDecrescent(array) {
  return array.sort((a, b) => b.length - a.length);
}
console.log(nameDecrescent(ex91));

// Exercício 92 => Dado um array de objetos que tem varias propriedades, crie uma função que retorne um novo array contendo apenas os valores de uma propriedade especifica
const ex92 = [
  { name: `João`, age: 21 },
  { name: `Ellen`, age: 17 },
  { name: `Nicolas`, age: 19 },
];

function propsEx92(array, prop) {
  return array.map((x) => x[prop]);
}
console.log(propsEx92(ex92, 'name'));

//! Exercício 93 => Dado um array de números, encontre a mediana
const ex93 = [3, 2, 1, 4, 6, 5, 7, 8, 10, 9];

function findMidian(array) {
  array.sort((x, y) => x - y);
  const middle = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return (array[middle - 1] + array[middle]) / 2;
  }
  return array[middle];
}
console.log(findMidian(ex93));

// Exercício 94 => Dado um array de string e um número n, retorne um novo array contendo apenas as strings que têm mais de n caracteres
const ex94 = [`João`, `Ellen`, `Nicolas`, `Adriano`, `Lucas`];

function ex94Func(array, x) {
  return array.filter((string) => string.length > x);
}
console.log(ex94Func(ex94, 4));

// Exercício 95 => Dado dois arrays, ordene de forma decrescente e retorne um novo array cujo o qual é a concatenação dos dois
const ex95One = [2, 1, 4, 5, 3];
const ex95Two = [8, 6, 9, 7, 10];

function concatFunc(arrayOne, arrayTwo) {
  return arrayOne.concat(arrayTwo).sort((x, y) => y - x);
}
console.log(concatFunc(ex95One, ex95Two));

// Exercício 96 => Dado dois arrays, verifique se o segundo array é um sub-array do primeiro
const ex96One = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ex96Two = [4, 5, 6, 7];

function ex96Func(arrayOne, arrayTwo) {
  return arrayOne.join(',').includes(arrayTwo.join(','));
}
console.log(ex96Func(ex96One, ex96Two));
